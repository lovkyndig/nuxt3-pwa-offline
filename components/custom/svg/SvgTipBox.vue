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
  <span v-if="props.name === 'lightbulb-fill'" > 
    <SvgoBiLightbulbFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'megaphone-fill'" > 
    <SvgoBiMegaphoneFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'exclamation-triangle-fill'" > 
    <SvgoBiExclamationTriangleFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'balloon-fill'" > 
    <SvgoBiBalloonFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'award-fill'" > 
    <SvgoBiAwardFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'question-circle-fill'" > 
    <SvgoBiQuestionCircleFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'hand-thumbs-up-fill'" > 
    <SvgoBiLightbulbFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'hand-thumbs-down-fill'" > 
    <SvgoBiHandThumbsDownFill :class="props.iconClass" />
  </span>
  <span v-else-if="props.name === 'chat-left-text-fill'" > 
    <SvgoBiChatLeftTextFill :class="props.iconClass" />
  </span>
  <span v-else>
    <SvgoBiLightbulbFill :class="props.iconClass" />
  </span>
  <!-- Used in TipBox -->
</template>