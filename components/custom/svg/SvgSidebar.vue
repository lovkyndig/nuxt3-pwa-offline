<script setup lang="ts">
const props = defineProps<{
  name?: string; // originalt only: name: string
  iconClass?: string
}>()
/*
THIS COMPONENT CAN ONLY BE USED IN THIS TEMPLATE IN ONE CONDITIONS;
THE ICONS HAVE TO BE SAVED IN USERS FOLDER: ASSETS/ICONS 
*/
</script>
<template>
  <span v-if="props.name === 'sidebarList'" > 
    <SvgoMingcuteMiniplayerLine :class="props.iconClass" />
  </span> 
  <span v-else>
    <SvgoMingcuteExpandPlayerLine :class="props.iconClass" />
  </span>
  <!-- Used in ListCatalog -->
</template>