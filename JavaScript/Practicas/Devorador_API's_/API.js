
import fs from "fs/promises";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "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"
});

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Cual es la falla de los Boing-737?",
});

function chatquestion(){
    
}
console.log(response.output_text);

 document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
