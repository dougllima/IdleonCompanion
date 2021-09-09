<template>
  <q-banner inline-actions>
    Use this page to optimize yours refinary levels and get the most of all sault.
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
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { Assets } from "~/composables/Utilities";
import ICAsset from "~/components/idleon-companion/IC-Asset.vue";

const wikiLinks = new Map([["Smithing", "https://idleon.info/wiki/Smithing"]]);

export default defineComponent({
  name: "RefinaryOptmizer",
  components: { ICAsset },
  setup() {
    return {
      Assets,
      wikiLinks,
    };
  },
});
</script>

<style lang="sass" scoped>
@import '../../styles/base.sass'
</style>

