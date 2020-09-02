[logo]: ./assets/Demo.gif "Logo example"

# Social Graphics Library

## Einführung

Das **Social Graphics Library** Script nutzt `<canvas>`
zum generieren von von SVG, PNG, JPEG und WebP Grafiken für FearNixx Team Mitglieder und Spieler.

<img src="assets/sgl.png" alt="Logo" width="200px" height="auto" align="right" position="absolute">

### Aufbau

Zum generieren einer Grafik wird die statische Funktion `generator`
auf der Klasse `SocialGraphicsLibrary` aufgerufen:

`SocialGraphicsLibrary.generator(teamName, mode, containerId, imgMode);`

Alternativ kann auch, sollten mehrere Grafiken generiert werden, die Methode `multiGenerator` aufgerufen werden:

        SocialGraphicsLibrary.multiGenerator(uName, [{
                        mode: 'twitch-title',
                        containerId: 'img-container-1',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'elavate-title',
                        containerId: 'img-container-2',
                        imgMode: 'jpeg'
                    }]

### Modifikatoren

* Team Name:
  * Der Nutzer oder Team-Name
* Modus:
  * Der Modus des zu generierenden Bildes
    * youtube-title
      * Generiert ein Youtube Titelbild
    *twitch-title
      * Generiert ein Twitch Titelbild
    * twitter-title
      * Generiert ein Twitter Titelbild
    * elavate-title
      * Generiert ein Youtube Titelbild
    * gaming
      * Generiert ein Gaming Logo

* Container ID:
  * Gibt die ID des Containers an, welcher als Ziel für
      das generierte Bild dient

* Image Modus:
  * Der Modus des zu generierenen Bildes
    * png
    * svg
    * jpeg
    * webp

![Example Gif](logo)
