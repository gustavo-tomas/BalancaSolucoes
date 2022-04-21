<template>
  <p class="title">O que dizem sobre nós</p>
  <div class="container">
    <div class="testimonies">
      <Testimony
        testName="Pelé"
        testRole="Atleta"
        testImg="pele.png"
        testDiscl="O Pelé pode não ter dito isso"
        :testRating="5"
        :testText="text[0]"
      />
      <Testimony
        testName="Batman"
        testRole="Super-herói"
        testImg="batman.png"
        testDiscl="Esse homem não é o Batman"
        :testRating="4"
        :testText="text[1]"
      />
    </div>
    <div class="comment-section">
      <h2 class="comment-title">Escreva um comentário</h2>
      <textarea
        class="textarea"
        v-model="userComment"
        placeholder="Escreva aqui"
        maxlength="140"
      ></textarea>
      <div class="user-comment">
        <span v-if="userComment.length >= 1">
          {{ (renderedComment = "O Balança Soluções é ") }}
        </span>
        <span v-for="i in userComment" :key="i">
          <span v-if="userComment.length >= 2">
            {{ (renderedComment = "muito ") }}
          </span>
        </span>
        <span v-if="userComment.length >= 1">
          {{ (renderedComment = "legal.") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Testimony from "../components/Testimony.vue";

const text = [
  `Sou o rei que sou pelo Balança Soluções. Devo tudo a eles. Obrigado!`,
  `Graças ao Balança Soluções posso combater o crime e o colesterol alto.`,
];

let userComment = "";
let renderedComment = "";

export default {
  name: "Testimonies",
  components: {
    Testimony,
  },
  data() {
    return {
      text,
      userComment,
      renderedComment,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
}

.title {
  font-size: 64px;
  margin: 30px 0px;
}

.testimonies {
  display: inline-grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 50px 100px;
}

.comment-section {
  align-self: flex-start;
  margin-top: 50px;
  height: 400px;
  width: 800px;
}

.comment-title {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  padding-left: 10px;
}

.user-comment {
  text-align: left;
  overflow: auto;
  word-break: break-all;
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

.textarea {
  font-family: inherit;
  width: 100%;
  height: 100px;
  outline: none;
  resize: none;
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
