 #include <ESP8266WiFi.h>            
#include <ESP8266WebServer.h>
ESP8266WebServer server(80);

const String ssid = "Acajabón";
const String password = "12345678";
const int luzSala = 1;
const int luzHabitacion = 2;
const int luzCocina = 3;
const int cortinaIzq = 4;
const int cortinaDer = 5;
const int cortinaStop = 6;
const int getTemperatura = 7;
const int getEnergia = 8;

/*
  Codigo de Accion            Descripcion de la accion
          1                   Encender luz de la sala
          2                   Encender luz de la habitacion
          3                   Encender luz de la cocina
          4                   Mover cortina a la izquierda
          5                   Deter el movimiento de la cortina
          6                   Mover cortina a la derecha
          7                   Obtener la temperatura (Arreglo)
          8                   Obtener el consumo de energia del dia
*/

void setup(){  
  Serial.begin(115200);

  WiFi.begin(ssid, password);  //Connect to the WiFi network
 
  while (WiFi.status() != WL_CONNECTED) {  //Wait for connection
    delay(1500);
    Serial.println("Connecting…");
  }

  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //Print the local IP
  server.on("/connect", [](){
    server.send(200, "text/plain", "Connected successfully");
  });
  server.on("/controls", handleControlsPaths);
  server.onNotFound(handleNotFound);
  server.begin();
  Serial.println("Server listening");
}

void loop(){
  server.handleClient();
}

void handleNotFound(){
  server.send(404, "text/plane", "This resource doesn't exist");
}

void handleControlsPaths() {            //Handler for the rooth path
  String message;
  int action;
  if(server.arg("ligths") != "" ){
    //Este if es para las luces
    String value = server.arg("ligths");
    action = (value == "livingRoom")? luzSala: (value == "room")? luzHabitacion: (value == "dinningRoom")? luzCocina: 0;
    if(action != 0){
      Serial.println(action);
      message = "Accion realizada con exito";
    }else message = "Error: Parametro de luz no valido";
  }else if(server.arg("curtains") != ""){
    String value = server.arg("curtains");
    action = (value == "left")? cortinaIzq: (value == "right")? cortinaDer : (value == "stop")? cortinaStop: 0;
    if(action != 0){
      Serial.println(action);
      message = "Accion realizada con exito";
    }else message = "Error: Parametro de la cortina no valido";
  }else if(server.arg("temperature") != "get"){
    String value = server.arg("temperature");
    action = (value == "get")? getTemperatura: 0;
    if(action != 0){
      Serial.println(action);
      message = "Accion realizada con exito";
    }else message = "Error: Parametro de la temperatura no valido";
  }else if(server.arg("energy") != "get"){
    String value = server.arg("energy");
    action = (value == "get")? getEnergia: 0;
    if(action != 0){
      Serial.println(action);
      message = "Accion realizada con exito";
    }else message   = "Error: Parametro de la energia no valido";
  }else{
    message = "Error: Sin parametros validos";
  }
  server.send(200, "text/plain", message); 
}
