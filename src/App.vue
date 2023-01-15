<template>
  <div id="application">
    <header class="header bg-primary">
      <h3 class="text-white m-0">= Академия успешного успеха =</h3>
    </header>
    <main class="content container">
      <!-- Текст страницы -->
      <div v-show="!isChatActive" class="features">
        <section class="wishes">
          <p class="text-start">
            Надоело сводить концы с концами, распределяя свои финансы от
            зарплаты до зарплаты? Не знаешь как увеличить свой доход?
            Понравившийся тебе человек не обращает на тебя внимание? Не можешь
            определиться с выбором профессии? Хочешь мечтать и жить по-крупному?
          </p>
          <p class="important">
            Ты здесь - а, значит, ты уже на верном пути! Время ставить на карту
            свои цели! Время воплощать свои планы!
          </p>
        </section>
        <section class="promises bg-white text-start">
          <p>
            В нашей академии тебя научат успешному успеху, который охватит все
            сферы твоей жизни. Наши респектабельные коучи научат тебя
            зарабатывать <b>over 1 000 000 рублей в месяц</b>. Возможно, ты сам
            сможешь стать тренером тренеров.
          </p>
          <p>
            Роcкошь и богатство непременно настигнут тебя после того как ты
            пройдешь наш курс. При этом тебе не нужно будет работать
            круглосуточно,
            <b>ты сможешь работать тогда, когда сам этого пожелаешь</b>.
            Практические занятия помогут тебе избавиться от негативных установок
            и раскроют твоё подсознание для потока энергии успеха. Ты заметишь,
            как меняется не только твоё материальное положение, но и окружение,
            а также улучшаются отношения с близкими людьми.
          </p>
        </section>
        <section class="payment bg-white">
          <p><b>Курс «Успех во всём!»</b></p>
          <p>Следующий старт {{ deadlineDate }}</p>
          <p class="important">
            До старта осталось<br />
            <!--            {{ daysToDeadline }} дней-->
            {{ String(hoursToDeadline).padStart(2, "0") }} часов
            {{ String(minutesToDeadline).padStart(2, "0") }} минут
            {{ String(secondsToDeadline).padStart(2, "0") }} секунд
          </p>
          <button
            :class="[
              'btn btn-primary mb-3',
              { disabled: isDeadline || !vacancies || isSubscribe },
            ]"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="subscribeUser"
          >
            Запись на курс
          </button>
          <p>
            <b v-if="vacancies && !isDeadline"
              >Осталось <span>{{ vacancies }}</span> мест!</b
            >
            <b v-else
              >К сожалению места закончились. Ожидайте следующего уникального
              набора</b
            >
          </p>
          <p class="important">Иди навстречу своей мечте!</p>
        </section>
        <section class="promises bg-white text-start">
          <p>
            Уникальные методики помогут составить тебе карту желаний,
            сфокусироваться на своих мечтах, избаться от страхов.
          </p>
          <p>
            Многие студенты после прохождения курса находят спутника своей
            жизни. Некоторым из наших студентов курс помог раскрыть способность
            изучения нескольких иностранных языков одновременно, другим -
            способность игры на музыкальных инструментах. Пары, которые не могли
            завести детей долгое время, после курса получили желанного ребенка.
          </p>
          <p>
            Уже через месяц после прохождения курса нашей академии большинство
            наших студентов
            <b>приобретают автомобили, а некоторые - даже яхты</b>. А через два
            месяца - <b>решают все вопросы с недвижимостью</b>.
          </p>
        </section>
        <section class="menace text-start">
          <p>
            К сожалению, мы не можем сделать успешными всех. Количество мест в
            группах "успешников" ограниченно. Мы проводим наши курс не слишком
            часто, чтобы не нарушать баланс богатства и успешности во вселенной.
          </p>
          <p class="important">
            Но тебе повезло! Поторопись записаться немедленно!
          </p>
          <p>
            Надеемся, что Вас не смущает стоимость курса в 20 000 рублей. Скоро
            такие суммы для Вас ничего не будут значить. 20 000 за роскошь и
            гламур?! Через некоторое время Вы будете смеяться над тем, что
            жалели такую незначительную сумму на уникальные знания!
          </p>
          <p>
            Бесплатный совет от академии: если у Вас совершенно плачевное
            финансовое состояние в данный момент, воспользуйтесь услугами
            микрокредитной организации
            <b
              ><a
                href="#"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="subscribeUser"
                >"Лёгкие деньги под 2% в день"</a
              ></b
            >.
          </p>
          <p class="important">И успех непременно тебя настигнет!</p>
        </section>

        <!-- Модальное окно -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Поздравляем Вас!
                </h5>
                <button
                  type="button"
                  class="btn btn-icon-square"
                  data-bs-dismiss="modal"
                  aria-label="Закрыть"
                >
                  <span class="material-icons"> close </span>
                </button>
              </div>
              <div class="modal-body">
                Вы только что записались на курс "Успех во всём"! Со счета Вашей
                карты списано 20 000 рублей. На недостающую сумму оформлен
                кредит в микрокредитной организации "Лёгкие деньги под 2% в
                день" на Ваше имя! <br />
                Поздравляем! <br />
                Успех уже близко!
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary btn-icon-square rounded-circle btn-pulse"
          @click="isChatActive = true"
        >
          <span class="material-icons"> chat </span>
        </button>
      </div>

      <!-- Чат -->
      <div v-show="isChatActive" class="chat-bot">
        <div class="chat-header">
          Техническая поддержка
          <button
            type="button"
            class="btn btn-primary btn-icon-square"
            @click="isChatActive = false"
          >
            <span class="material-icons"> close </span>
          </button>
        </div>
        <div id="wrapper" class="wrapper">
          <div id="dialog">
            <div class="replica answer">
              Здравствуйте! Чем я могу Вам помочь?
            </div>
          </div>
        </div>
        <form class="form" @submit.prevent="addQuestion">
          <div class="input-group">
            <input
              placeholder="Напишите вопрос..."
              autocomplete="off"
              class="form-control"
              v-model="question"
            />
            <button class="btn btn-primary btn-icon-square">
              <span class="material-icons"> send </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      daysToDeadline: 0,
      hoursToDeadline: 2,
      minutesToDeadline: 10,
      secondsToDeadline: 15,
      vacancies: 15,
      vacanciesCountdownSeconds: null,
      vacanciesCountdownSecondsDefault: 35,
      timerId: null,
      isDeadline: false,
      isSubscribe: false,

      question: "",
      answers: [
        "Благодарим за обращение. Мы свяжемся с вами как только закончим праздновать ваше обращение!",
        "Вы уже пробовали перезагружать ваше устройство? В 95% случаев это помогает.",
        "К сожалению, Ваше прошлое обращение попало в спам. Но на данный момент ваше обращение зафиксировано.",
        "Были рады Вам помочь! До свидания!",
        "Наши специалисты уже занимаются вашей проблемой. Напомните, пожалуйста, по какому поводу вы обращались.",
        "Ваше обращение очень важно для нас. Специалист экстренной поддержки ответит вам сразу после перекуса!",
        "С Вашего счета успешно списаны 10 000 руб. Благодарим Вас за то, что выбрали именно нас!",
        "В жизни частенько происходят неприятные события. Главное - не отчаиваться! Всё пройдёт, со временем.",
        "С помощью удалённого доступа я случайно удалил все файлы с Вашего устройства. Извините. Был рад помочь!",
      ],
      isChatActive: false,
    };
  },

  computed: {
    deadlineDate: function () {
      return new Intl.DateTimeFormat("ru-RU").format(
        new Date(
          new Date().getTime() +
            this.daysToDeadline * 24 * 60 * 60 * 1000 +
            this.hoursToDeadline * 60 * 60 * 1000 +
            this.minutesToDeadline * 60 * 1000 +
            this.secondsToDeadline * 1000
        )
      );
    },
  },

  methods: {
    countDown() {
      if (!this.secondsToDeadline) {
        if (!this.minutesToDeadline) {
          if (!this.hoursToDeadline) {
            if (!this.daysToDeadline) {
              clearTimeout(this.timerId);
              this.isDeadline = true;
            } else {
              this.daysToDeadline--;
              this.hoursToDeadline = 23;
              this.minutesToDeadline = 59;
              this.secondsToDeadline = 59;
            }
          } else {
            this.hoursToDeadline--;
            this.minutesToDeadline = 59;
            this.secondsToDeadline = 59;
          }
        } else {
          this.minutesToDeadline--;
          this.secondsToDeadline = 59;
        }
      } else {
        this.secondsToDeadline--;
      }

      if (this.vacancies) {
        if (!this.vacanciesCountdownSeconds) {
          this.vacancies--;
          this.vacanciesCountdownSeconds =
            this.vacanciesCountdownSecondsDefault;
        } else {
          this.vacanciesCountdownSeconds--;
        }
      }
    },

    subscribeUser() {
      this.isSubscribe = true;
      this.vacancies--;
    },

    addQuestion() {
      if (this.question.trim()) {
        let dialogContainer = document.getElementById("dialog");
        let newMessage = document.createElement("div");
        newMessage.className = "replica question text-end";
        newMessage.textContent = this.question;
        dialogContainer.append(newMessage);
        this.question = "";
        setTimeout(this.fakeAnswer, 500);
      }
    },

    fakeAnswer() {
      let dialogContainer = document.getElementById("dialog");
      let newMessage = document.createElement("div");
      newMessage.className = "replica answer text-start";
      newMessage.textContent =
        this.answers[Math.floor(Math.random() * this.answers.length)];
      dialogContainer.append(newMessage);
      this.scrollDown();
    },

    // Если список длинный, просматриваются ранние сообщения и вводится новое сообщение, то данный метод прокручивает список к последнему введенному сообщению
    scrollDown() {
      let scrollable = document.getElementById("wrapper");
      scrollable.scrollTop = 0;
    },
  },

  mounted() {
    this.vacanciesCountdownSeconds = this.vacanciesCountdownSecondsDefault;
    this.timerId = setInterval(this.countDown, 1000);
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Material Icons";
  src: url(./fonts/MaterialIcons-Regular.woff2) format("woff2");
}

@font-face {
  font-family: "Lobster";
  src: url(./fonts/Lobster-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Caveat";
  src: url(./fonts/Caveat-VariableFont_wght.ttf) format("truetype");
}

#application {
  font-family: "Caveat";
  font-size: 1.5rem;
  line-height: 1.25;

  //Global buttons and icons
  .btn-icon-square {
    line-height: 0.75;
    padding-left: 0.375rem;
    padding-right: 0.375rem;

    .material-icons {
      font-family: "Material Icons";
      font-size: 24px;
      display: inline-block;
      line-height: 1;
    }
  }

  .header {
    font-family: "Lobster";
    height: 3.5rem;
    width: 100vw;
    /*Вертикальное выравнивание блочного элемента*/
    display: table-cell;
    vertical-align: middle;
  }

  .content {
    .features {
      padding-bottom: 0.75rem;

      section {
        padding: 1rem;
        border: 0.1875rem solid var(--bs-primary);
        border-radius: 1rem;

        &:not(:last-of-type) {
          margin-bottom: 0.75rem;
        }

        &:first-child {
          margin-top: 0.75rem;
        }

        p:last-child {
          margin-bottom: 0;
        }

        .important {
          background-color: var(--bs-secondary);
          font-weight: bold;
          color: white;
          text-align: center;
          padding: 0.5rem;
        }
      }

      .btn-pulse {
        animation: pulse 1s infinite;
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
      }
    }

    .chat-bot {
      height: calc(100vh - 3.5rem);
      display: flex;
      flex-direction: column;

      .chat-header {
        font-weight: bold;
        /*Вертикальное выравнивание инлайн-элемента*/
        height: 3.5rem;
        line-height: 3.5rem;

        button {
          float: right;
          margin-top: 0.5625rem;
        }
      }

      .wrapper {
        overflow-y: auto;
        height: calc(100vh - 3.5rem - 3.5rem - 3.5rem);
        display: flex;
        flex-direction: column-reverse;
        scroll-behavior: smooth;
        background: url("./design/back.png");
        background-size: 1.5rem;
        scrollbar-color: var(--primary) transparent;
        scrollbar-width: thin;

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
          background-color: transparent;
          width: 0.5rem;
        }

        /*Кнопки перемотки*/
        /*&::-webkit-scrollbar-button:single-button {*/
        /*  background-color: yellow;*/
        /*  border: 3px solid blueviolet;*/
        /*  border-radius: 20px;*/
        /*}*/

        /*Пример стилизации верхней кнопки перемотки*/
        /*&::-webkit-scrollbar-button:single-button:start {*/
        /*  background-color: blue;*/
        /*  border: 3px solid blueviolet;*/
        /*  border-radius: 20px;*/
        /*}*/

        /*Бегунок*/
        &::-webkit-scrollbar-thumb {
          background-color: var(--bs-primary);
          /*border: 3px dashed navy;*/
          /*border-radius: 1rem;*/
        }

        /*Пример стилизации бегунка, когда окно неактивно*/
        &::-webkit-scrollbar-thumb:window-inactive {
          background-color: var(--bs-secondary);
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
        /*&::-webkit-scrollbar-track-piece:end {*/
        /*  background-color: crimson;*/
        /*}*/

        /*Квадрат на стыке двух перпендикулярных полос прокрутки*/
        /*&::-webkit-scrollbar-corner {*/
        /*  background-color: green;*/
        /*}*/

        /*Ресайз-уголок, как у textarea*/
        /*&::-webkit-resizer {*/
        /*  background-color: rebeccapurple;*/
        /*}*/

        #dialog {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 0.5rem 0;
          /*Способ №2*/
          /*display: inline-flex;*/

          .replica {
            padding: 0.375rem 0.75rem;
            max-width: calc(100% - 3.5rem);
            margin-bottom: 0.5rem;
            display: inline-block;
            overflow-wrap: break-word;
          }

          .answer {
            background-color: rgba(var(--bs-secondary-rgb), 0.25);
            border: var(--bs-secondary) 1px solid;
            border-radius: 0 0.75rem 0.75rem;
            align-self: start;
          }

          .question {
            background-color: rgba(var(--bs-primary-rgb), 0.25);
            border: var(--bs-primary) 1px solid;
            border-radius: 0.75rem 0.75rem 0;
            align-self: end;
          }
        }
      }

      .form {
        padding-top: 0.5625rem;
        padding-bottom: 0.5625rem;

        input {
          background-color: white;
        }
      }
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0px var(--bs-primary);
    }

    100% {
      box-shadow: 0 0 0 1rem rgba(255, 255, 255, 0);
    }
  }
}
</style>
