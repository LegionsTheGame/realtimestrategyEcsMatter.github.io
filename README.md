# realtimestrategyEcsMatter.github.io

## Spillet:
https://realtimestrategyecsmatter.github.io/

## Udviklings strategi:
Under udviklingen af spillet, har jeg defineret følgende principper:

* Det sværeste, skal udvikles først.
* Stres-test hver gang det er muligt.
* Refaktorering af kode - anvend "Data Driven" og "Entity Component System" design  

## Logbog:
Nedenfor har jeg skrevet de vigtigste tanker vedrørende projektet. </br>
Jeg har på forskellige tidspunkter haft forskellige fokuspunkter som man kan læse om nedenfor. 

### D.26/3 -2021

Har erkendt at for tildelingen til "uniform grid" har spilobjektet størrelse som et "punkt"</br>
Dette er ikke hensigsmæssigt!!!</br>
En spilobjekt burde kunne være i to "felter" på samme tid</br>
</br>
Nedenfor ses en grafisk-debug visning af problemet, de to enheder der overlapper er i hhv. "felt nr 21" og "felt nr 22" of kan altså ikke kollidere:</br>
![](pics/single_uniform_grid.png)


### D.23/3 -2021
Brug af uniform grid collision.</br> Det ser ud som om flere felter med få objekter er bedre end få felter med mange objekter:</br>
Feks: opdeing af 100 objeketer</br>
10 felter * (10 objekter)^2 = 1000 beregninger</br>
20 felter * (5 objeketer)^2 = 500 beregninger</br>
osv.</br>


### D.22/3 - 2021
Der arbejdes på en form for "uniform-grid-collision-detection"</br>
Jeg har valgt at prøve at udvikle en simpel metode selv, baseret på to forskellige undform grids der er lidt forskudte.</br>

### D.27/2 - 2021
Det næste der skal ordnes er "full-skærm" på alle enheder</br>
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen2

### D.26/2 - 2021
Her er en lille dagbog over mit arbejde </br>
Jeg har fået tilføjet små animerede hærer der følger et "touch" </br>

