<script>
export default {
  //  Для создания кастомных директив используют обьект для реестрации директив - directives. Кастомные директивы доступни в компоненте где они были созданы или во всех компонентах если их глобально зарегестировать с помощью app.directive()

  directives: {
    // создание локальной кастомной директивы v-focus которая устанавлевает фокус на инпуте
    focus: {
      mounted(el) {
        el.focus()
      }
    },
    // хуки жизненного цикла для создания кастомных директив.
    // КАЖДИЙ из хуков принемает (el, binding, vnode, prevVnode):
    // el - елемент к которому привязана директива.
    // binding - объект со следующими свойствами:
    /////////////// value: значение переданое в директиву. Например, у v-my-directive="1 + 1" значением будет 2.
    /////////////// oldValue: Предыдущее значение, доступное только beforeUpdate и updated. Доступный не зависимо от того изменилось ли значение.
    /////////////// arg: Аргумент передаєтся директиве, если такая есть. Например, у v-my-directive:foo аргументом будет "foo".
    /////////////// modifiers: Объект, что содержит модификаторы если такие есть. Например, у v-my-directive.foo.bar объект-модификатор будет { foo: true, bar: true }.
    /////////////// instance: Екземпляр компонента, где используется директива.
    /////////////// dir: объект определения директиви.
    // vnode -базовий VNode, что представляет связаный елемент.
    // prevVnode - VNode, що представляет привязаный елемент с предыдущего рендеринга. Доступно только в хуках beforeUpdate і updated.

    created() {}, // перед прив'язкою атрибутов елемента или приминением слушателей событий
    beforeMount() {}, // перед тем как елемент будет вставлен в DOM
    mounted() {}, // когда родительским компонент и все его дети смонтированы.
    beforeUpdate() {}, // перед обновление родительского компонента.
    updated() {}, // после обновления родительского компонента и всех дочерних
    beforeUnmount() {}, // перед тем как родительский компонент будет демонтирован
    unmounted() {} // когда родительский компонент был демонтирован
  }
}
</script>

<template>
  <input v-focus />
  <!-- ДИРЕКТИВЫ - это специальные атрибуты. -->
  <!--👉 глобальная реестрация показана в main.js -->
  <!-- в етом блоке описывают HTML шаблон компонента -->

  <!-- 
👉 v-text: устанавливает текстовое содержимое элемента 
👉 v-html: устанавливает содержимое элемента в виде HTML-разметки 
👉 v-show: управляет отображением элемента на основе выражения 
👉 v-if: условное отображение элемента на основе выражения 
👉 v-else-if: условный блок, который отображается, когда предыдущее выражение v-if ложно, а текущее выражение истинно 
👉 v-else: условный блок, который отображается, когда выражение в v-if ложно 
👉 v-for: итерация по коллекции и создание элементов для каждого элемента коллекции 
👉 v-on: (сокращенно @) прослушивание события элемента и вызов метода или выражения при его
возникновении
        Модификаторы:
            .stop - вызывает event.stopPropagation().
            .prevent - вызывает event.preventDefault().
            .{keyAlias}  @keyup.enter or @keydown.enter - вызывает обработчик только при нажатии определенной клавииши.
            .self - вызывает обработчик только когда событие случилось именно на етом елементе.
            .once - вызывает обработчик события только один раз.
            .left - вызывает обработчик только после нажатия левой кнопки миши.
            .right - вызывает обработчик только после нажатия правой кнопки миши.
            .middle - вызывает обработчик только после нажатия средней кнопки миши.
            .passive - добавляет обработчик события DOM с опцией { passive: true }.
            .capture - добавляет слушателя событий в режиме захвата. Будет вызван на верхнем уровне элемента при событии, прежде чем событие будет передано в child-component.
👉 v-bind: (сокращенно :) связывание атрибута элемента с выражением 
        Модификаторы:
             .camel - преобразовывает название атрибута kebab-case на camelCase.
             .prop - используется для привязки как DOM-свойства.
             .attr - используется для привязки как DOM-атрибута. 
👉 v-model: двустороннее связывание данных между элементом и свойством данных. Используется только с <input>, <select>, <textarea>. 
        Модификаторы:
             .lazy - слушать change события вместо input
             .number - преобразование коректной строки в числа
             .trim - обрезать пробелы входящих данных 

👉 v-once: отображает элемент только один раз и не обновляет его при изменении данных 
👉 v-slot: определение слотов, которые могут быть заполнены внешними компонентами 
👉 v-pre: отключает КОМПИЛЯЦИЮ элемента или его дочерних элементов 
👉 v-memo: мемоизирует результат выполнения функции или выражения для оптимизации производительности
    ❗️❗️❗️v-memo не работает внутри v-for. Используя v-memo с v-for, нужно проверить, что они используюются в одном елементе. 

👉 v-cloak: скрывает элементы, пока фреймворк Vue.js не загрузится и не скомпилирует их.
   -->
  <div></div>
</template>

<style scoped></style>
