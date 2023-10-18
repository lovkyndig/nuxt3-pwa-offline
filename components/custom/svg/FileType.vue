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
  <span id="filetype">
  </span>
  <!-- See states.ts for other types: csv, json and csv -->
  <span v-if="props.name === 'markdown-fill'" > 
    <SvgoBiMarkdownFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'file-earmark-text'" > 
    <SvgoBiFileEarmarkText :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'filetype-json'" > 
    <SvgoBiFiletypeJson :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'filetype-csv'" > 
    <SvgoBiBalloonFill :class="props.iconClass" />
  </span>
  <span v-else> 
    <SvgoMingcuteFileUnknownLine :class="props.iconClass" />
  </span>
</template>