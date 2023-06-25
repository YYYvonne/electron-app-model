<template>
  <div class="appHome">
    <h2>appHome</h2>
    <p>
      {{ t('app.copyRight.rMsg') }} {{ BRANCH }} (r{{ COMMIT_TIMES }} {{ COMMIT_ID }})
      {{ COMMIT_TIME }}
    </p>
  </div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import { t } from '@renderer/lang/zh';
  const { COMMIT_ID, COMMIT_TIMES, BRANCH, COMMIT_TIME } = GLOBAL_VAR;
</script>

<style lang="less" scoped>
  p {
    color: #656d76;
    font-size: 15px;
    text-align: center;
  }
</style>
