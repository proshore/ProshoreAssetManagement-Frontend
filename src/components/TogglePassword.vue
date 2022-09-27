<script>
    export default{
        props:{
                seen:{
                    type:Boolean,
                    required:true,
}
            }
    }
</script>

<template>
    <div class="icon">
        <i
        :class="`bi ${seen ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`"
        id="showPassword"
      @click="$emit('clicked')"
      data-cy="toggle-seen"
    ></i>
    </div>
     
</template>