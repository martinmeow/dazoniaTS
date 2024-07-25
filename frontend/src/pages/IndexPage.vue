<template>
  <q-page class="row items-center justify-evenly">
    Server time: {{ time }}
    <br>
    Server admin: {{ person?.name }}
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { api } from 'src/boot/axios';

defineOptions({
  name: 'IndexPage'
});

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);

const meta = ref<Meta>({
  totalCount: 1200
});

const time = ref('loading time...');
const person = ref<Person>({name: 'unknown'});

api.get<string>('/time').then(({data})=>{  
    time.value = data;
}).catch(reason=>{
  time.value = 'Failed to fetch time';
  console.error(reason);
})

api.get<Person>('/person').then(({data})=>{
    person.value = data;
}).catch(reason=>{
  person.value = {name: 'error'}
  console.error(reason);
})

type Person = {
  name: string;
}

</script>
