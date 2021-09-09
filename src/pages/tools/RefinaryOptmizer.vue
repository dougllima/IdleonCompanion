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
          <div class="w-1/4 md:w-1/6">
            <q-input
              v-model.number="cycleTime"
              type="time"
              step="1"
              filled
              label="Cycle time"
              stack-label
              class="p-2"
            />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { Assets } from "~/composables/Utilities";
import ICAsset from "~/components/idleon-companion/IC-Asset.vue";

const wikiLinks = new Map([
  ["Construction", "https://idleon.info/wiki/Construction"],
]);

export default defineComponent({
  name: "RefinaryOptmizer",
  components: { ICAsset },
  setup() {
    const lastUpdated = "09/09/2021";

    return {
      Assets,
      wikiLinks,
      lastUpdated,
    };
  },
});
</script>

<style lang="sass" scoped>
@import '../../styles/base.sass'
</style>

