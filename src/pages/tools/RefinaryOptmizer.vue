<template>
  <q-banner inline-actions>
    Use this page to optimize yours refinary levels and get the most of all
    sault.
    <template v-slot:action>
      <q-btn-dropdown outline label="Wiki">
        <q-list separator>
          <a v-for="[label, link] in wikiLinks" :key="label" :href="link">
            <q-item clickable>
              <q-item-section>{{ label }}</q-item-section>
            </q-item>
          </a>
        </q-list>
      </q-btn-dropdown>
    </template>
  </q-banner>
  <q-card class="m-4">
    <q-card-section>
      <div class="flex justify-between items-center">
        <div class="text-2xl">Refinary Optmizer</div>
        <div class="text-sm">Last Updated: {{ lastUpdated }}</div>
      </div>
      <div class="flex">
        <div class="w-full">
          <div class="w-1/3">
            <div class="text-xl">Resources per hour</div>
            <q-list bordered separator class="rounded">
              <q-item v-for="(quantity, name) in materialPerHour" :key="name">
                <q-item-section avatar>
                  <ICAsset
                    size="small"
                    :image="Assets.MaterialImage(name)"
                    :title="name"
                  >
                    <template #tooltip>
                      <div v-html="name"></div>
                    </template>
                  </ICAsset>
                </q-item-section>
                <q-item-section>{{ quantity }} {{ name }} </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="w-1/3">
            <div class="text-xl">Production per hour</div>
            <q-list bordered separator class="rounded">
              <q-item v-for="(quantity, name) in productionPerHour" :key="name">
                <q-item-section avatar>
                  <ICAsset
                    size="small"
                    :image="Assets.MaterialImage(name)"
                    :title="name"
                  >
                    <template #tooltip>
                      <div v-html="name"></div>
                    </template>
                  </ICAsset>
                </q-item-section>
                <q-item-section :class="{ 'text-danger': !hasEnough(name) }"
                  >{{ quantity }} {{ name }}
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { Assets, Time } from "~/composables/Utilities";
import { Salt, ranks, salts } from "~/composables/Refinery";
import ICAsset from "~/components/idleon-companion/IC-Asset.vue";

const wikiLinks = new Map([
  ["Construction", "https://idleon.info/wiki/Construction"],
]);

export default defineComponent({
  name: "RefinaryOptmizer",
  components: { ICAsset },
  setup() {
    const lastUpdated = "09/09/2021";

    const currentSalts = ref<Salt[]>(salts);
    const materialPerHour = computed<{ [name: string]: number }>(() => {
      const result: { [name: string]: number } = {};

      currentSalts.value.forEach((salt) => {
        if (salt.isOn) {
          const cycleSpeedFactor = Time.Hour / salt.baseCycleTime;
          salt.resource.forEach((material) => {
            if (!result[material.name]) {
              result[material.name] = 0;
            }
            result[material.name] +=
              material.quantity * salt.rank.costGrowth * cycleSpeedFactor;
          });
        }
      });

      return result;
    });

    const productionPerHour = computed<{ [name: string]: number }>(() => {
      const result: { [name: string]: number } = {};

      currentSalts.value.forEach((salt) => {
        if (salt.isOn) {
          const cycleSpeedFactor = Time.Hour / salt.baseCycleTime;

          result[salt.name] = Math.min(
            salt.rank.PowerGrowth * cycleSpeedFactor,
            salt.rank.saltCap
          );
        }
      });

      return result;
    });

    const hasEnough = (name: string) => {
      return productionPerHour.value[name] && materialPerHour.value[name]
        ? productionPerHour.value[name] > materialPerHour.value[name]
        : true;
    };

    return {
      defaultSalts: salts,
      Assets,
      hasEnough,
      wikiLinks,
      lastUpdated,
      materialPerHour,
      productionPerHour,
    };
  },
});
</script>

<style lang="sass" scoped>
@import '../../styles/base.sass'

.text-danger
  color: $red
</style>

