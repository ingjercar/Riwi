document.getElementById("consulta").addEventListener ("click",()=>{
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;

    urlForeCast = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=";

    urlForeCast=urlForeCast+lon+"&current_weather=true"

    fetch(urlForeCast).then(res => res.json()).then(data =>{
        const clima = data.current_weather;
        let respuestaHtml = "<p>Temperatura:"+clima.teperature+"°C</p>";
        respuestaHtml=respuestaHtml+"<p> viento:"+clima.windspeed+"Km/h</p>";

        document.getElementById("resultado").textContent="Error al obtener el clima.";
    });
});
