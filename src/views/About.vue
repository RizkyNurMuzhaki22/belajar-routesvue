<template>
    <div>
       <h1>About</h1> 
    </div>
</template>
<script>
import { onMounted } from 'vue';

export default {
    setup(props, context)
{
    onMounted(() => {
    context.emit("id-menu", 3);
})
}
}

</script>