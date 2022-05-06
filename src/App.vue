<template>
  <div id="app">
    <header class="header bg-primary">
      <h5 class="text-white m-0">
        Flex-container overflow & scrollbar stylization
      </h5>
    </header>
    <main class="content container">
      <div class="chat-bot">
        <div class="chat-header">Chat Header</div>
        <div class="row">
          <div class="col">
            <div class="wrapper">
              <div id="dialog1" class="dialog bg-info">
                <div class="replica question">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica question">Субсидии</div>
                <div class="replica answer">Извините, я ничего не нашел</div>
              </div>
            </div>
            <form class="form" @submit.prevent="addMessage('dialog1')">
              <div class="input-group">
                <input
                  placeholder="Просто напишите то, что ищете..."
                  autocomplete="off"
                  class="form-control"
                  v-model="field1"
                />
                <button class="btn btn-primary">Отправить</button>
              </div>
            </form>
          </div>
          <div class="col">
            <div id="wrapper2" class="wrapper">
              <div id="dialog2" class="dialog bg-info">
                <div class="replica question">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica question">Субсидии</div>
                <div class="replica answer">Извините, я ничего не нашел</div>
                <div class="replica question">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica question">Субсидии</div>
                <div class="replica answer">Извините, я ничего не нашел</div>
                <div class="replica question">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus error est, illum laudantium molestias, nesciunt,
                  possimus quo reiciendis rem sunt suscipit unde voluptatem
                  voluptatum? A aliquam aut dignissimos eligendi hic laboriosam,
                  porro reiciendis! Alias architecto, cumque exercitationem
                  facere fuga harum illo, nemo numquam provident quasi quidem
                  sunt? Doloremque, nulla voluptatum.
                </div>
                <div class="replica question">Субсидии</div>
                <div class="replica answer">Извините, я ничего не нашел</div>
              </div>
            </div>
            <form class="form" @submit.prevent="addMessage('dialog2')">
              <div class="input-group">
                <input
                  placeholder="Просто напишите то, что ищете..."
                  autocomplete="off"
                  class="form-control"
                  v-model="field2"
                />
                <button class="btn btn-primary">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      field1: "",
      field2: "",
    };
  },

  methods: {
    addMessage(dialog) {
      let dialogContainer = document.getElementById(dialog);
      let newMessage = document.createElement("div");
      newMessage.className = "replica question";
      if (dialog === "dialog1") {
        newMessage.textContent = this.field1;
      } else {
        newMessage.textContent = this.field2;
      }
      dialogContainer.append(newMessage);
      if (dialog === "dialog1") {
        this.field1 = "";
      } else {
        this.field2 = "";
      }
      setTimeout(this.fakeAnswer, 500, dialog);
      // let scrollable = document.getElementById("wrapper2");
      // scrollable.offsetHeight = 1000;
    },

    fakeAnswer(dialog) {
      let dialogContainer = document.getElementById(dialog);
      let newMessage = document.createElement("div");
      newMessage.className = "replica answer";
      newMessage.textContent =
        "Извините, техническая поддержка временно недоступна";
      dialogContainer.append(newMessage);
      this.scrollDown();
    },

    scrollDown() {
      let cont = document.getElementById("wrapper2");
      cont.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  text-align: center;

  .header {
    height: 3.5rem;
    width: 100vw;
    /*Вертикальное выравнивание блочного элемента*/
    display: table-cell;
    vertical-align: middle;
  }

  .content {
    flex: 1 0 auto;

    .chat-bot {
      height: calc(100vh - 3.5rem);
      display: flex;
      flex-direction: column;

      .chat-header {
        background-color: lightblue;
        /*Вертикальное выравнивание инлайн-элемента*/
        height: 3.5rem;
        line-height: 3.5rem;
      }

      .wrapper {
        overflow-y: auto;
        height: calc(100vh - 3.5rem - 3.5rem - 3.5rem);
        display: flex;
        flex-direction: column-reverse;
        scroll-behavior: smooth;

        /*Способ №2*/
        /*&:before {*/
        /*  content: "";*/
        /*  display: inline-block;*/
        /*  height: 100%;*/
        /*  vertical-align: bottom;*/
        /*}*/

        /*Не стандартизованная функциональность! Реботает в Chrome*/
        /*Вся полоса прокрутки*/
        &::-webkit-scrollbar {
          background-color: rgb(var(--bs-info-rgb));
          width: 0.75rem;
        }

        /*Кнопки перемотки*/
        &::-webkit-scrollbar-button:single-button {
          background-color: yellow;
          border: 3px solid blueviolet;
          border-radius: 20px;
        }

        /*Пример стилизации верхней кнопки перемотки*/
        &::-webkit-scrollbar-button:single-button:start {
          background-color: blue;
          border: 3px solid blueviolet;
          border-radius: 20px;
        }

        /*Бегунок*/
        &::-webkit-scrollbar-thumb {
          background-color: rgb(var(--bs-primary-rgb));
          border: 3px dashed navy;
          border-radius: 1rem;
        }

        /*Пример стилизации бегунка, когда окно неактивно*/
        &::-webkit-scrollbar-thumb:window-inactive {
          background-color: grey;
        }

        /*Трек для бегунка*/
        /*&::-webkit-scrollbar-track {*/
        /*  background-color: orangered;*/
        /*}*/

        /*Часть трека, незанятая бегунком*/
        /*&::-webkit-scrollbar-track-piece {*/
        /*  background-color: navy;*/
        /*}*/

        /*Пример стилизации нижней части трека, незанятого бегунком*/
        &::-webkit-scrollbar-track-piece:end {
          background-color: crimson;
        }

        /*Квадрат на стыке двух перпендикулярных полос прокрутки*/
        /*&::-webkit-scrollbar-corner {*/
        /*  background-color: green;*/
        /*}*/

        /*Ресайз-уголок, как у textarea*/
        /*&::-webkit-resizer {*/
        /*  background-color: rebeccapurple;*/
        /*}*/

        .dialog {
          min-height: min-content;
          display: flex;
          flex-direction: column;
          padding: 0 0.5rem;
          /*Способ №2*/
          /*display: inline-flex;*/

          .replica {
            padding: 0.375rem 0.75rem;
            border: blue 1px solid;
            max-width: calc(100% - 3.5rem);
            margin-bottom: 0.5rem;
          }

          .answer {
            background-color: #ddd;
            border-radius: 0 0.75rem 0.75rem;
            align-self: start;
          }

          .question {
            background-color: rgb(176, 195, 232);
            border-radius: 0.75rem 0.75rem 0;
            align-self: end;
          }
        }
      }

      .form {
        padding-top: 0.5625rem;
        padding-bottom: 0.5625rem;
      }
    }
  }
}
</style>
