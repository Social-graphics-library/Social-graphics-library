# Languages

- [Deutsche Version](#german)
- [English Version](#english)

--------------------------------------------------------------------------------------------------------

# German

## Social Graphics Library

### Einführung

Das **Social Graphics Library** Script nutzt `<canvas>`
zum generieren von von SVG, PNG, JPEG und WebP Grafiken für Community Team Mitglieder und Spieler.

<img src="https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/sgl.png" alt="Logo" width="200px" height="auto" align="right" position="absolute">

### Support

Es besteht auch Support über den [Software Support Discord Server](https://discord.gg/fraspbc)

### Aufbau

Zum generieren einer Grafik wird die statische Funktion `generator`
auf der Klasse `SocialGraphicsLibrary` aufgerufen:

    new SocialGraphicsLibrary.generator(
        teamName,
        playerName,
        mode,
        containerId,
        imgMode
      );

Alternativ kann auch, sollten mehrere Grafiken generiert werden, die Methode `multiGenerator` aufgerufen werden:

    new SocialGraphicsLibrary.multiGenerator(tName, pName, [{
                    mode: 'twitch-title',
                    containerId: 'img-container-1',
                    imgMode: 'jpeg'
                }, {
                    mode: 'elavate-title',
                    containerId: 'img-container-2',
                    imgMode: 'jpeg',
                    generateLink: true
                }]

### Modifikatoren

- Team Name:
  - Der Team-Name
- Player Name:
  - Der Nutzer-Name
- Modus:
  - Der Modus des zu generierenden Bildes
    - youtube-title
      - Generiert ein Youtube Titelbild
    - twitch-title
      - Generiert ein Twitch Titelbild
    - twitter-title
      - Generiert ein Twitter Titelbild
    - elavate-title
      - Generiert ein Youtube Titelbild
    - gaming
      - Generiert ein Gaming Logo

- Container ID:
  - Gibt die ID des Containers an, welcher als Ziel für
      das generierte Bild dient

- Image Modus:
  - Der Modus des zu generierenen Bildes
    - png
    - svg
    - jpeg
    - webp

- Generate Link
  - Dieser alternative Modus sorgt für das automatische rendern eines Download Links
    - true
    - false

---
### Inject Template (Experimentelles Feature)

Es ist möglich, alternativ zum Forkend es Projektes, eigene Templates lokal zu injecten. Dazu einfach das NPM Packet installieren mit `npm i social-graphics-library` , danach kann nach der initialisierung mit der folgenden Methode ein Template Injekted werden:

    new SocialGraphicsLibrary.inject([
      {
        "callName": "template_name",
        "template": new Template()
      }
    ])

---
### Templates

Um eine Grafik generieren zu können, müssen sogenannte Template Dateien vorbereitet werden. Dabei handelt es sich um Typescript Klassen, in welchen die Grunddaten hinterlegt sind.

Ein simples Template ist wie folgt aufgebaut:

    export class Example_Template {

      static readonly width: number = 1000;

      static readonly height: number = 1000;

      static template(teamName: string, playerName: string): string {
        teamName;
        playerName;
        return 'svg string';
      }
    }

> Die Klasse hat immer(!) ein Feld für die Breite, eines für die Höhe und eine Methode, welche des SVG String zurückgibt.

Für das erstellen und anpassen liegen im `assetes` Ordner diverse Vorlagen für die großen Social Media Plattformen im .afpub Format vor. Diese Können mit Programmen der [Affinity Familie von Serif](http://affinity.serif.com/) geöffnet und bearbeitet werden. Alternativ liegen im `svg` Verzeichnis die daraus generierten Files.

### Achtung!
> Beim anlegen eines SVG files muss darauf geachtet werden, dass die später dynamischen Teile als TEXT und nicht als Vektor hinterlegt sind.

Nachdem das SVG fertig ist, kann es im `svg` Verzeichnis gespeichert werden und der Sourcecode der SVG wird als String in die `template()` Methode eingepflegt. Dabei werden die entsprechenden test stellen durch die Variablen ersetzt, die der Methode übergeben werden.

Solange der Name des Files (und der Klasse) einer der bestehenden, ausgenommen des Beispiels ist, kann jetzt das Beispiel Template einfach ersetzt werden und es funktioniert mit dem neuen. Sollte der Name anders sein,
muss die Klasse im glc File in der `generator` methoden eingepflegt werden.

Danach nurnoch kompilieren, einbinden und es ist fertig.

![Example Gif](https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/Demo.gif)

--------------------------------------------------------------------------------------------------------

# English

## Social Graphics Library

### Introduction

The **Social Graphics Library** script uses `<canvas>`
to generate SVG, PNG, JPEG and WebP graphics for community team members and players.

<img src="https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/sgl.png" alt="Logo" width="200px" height="auto" align="right" position="absolute">

### Support

There is also support via the [Software Support Discord Server](https://discord.gg/fraspbc)

### Structure

The static function `generator` is used to generate a graphic
called on the class `SocialGraphicsLibrary`:

    new SocialGraphicsLibrary.generator(
        teamName,
        playerName,
        mode,
        containerId,
        imgMode
      );

Alternatively, if several graphics are to be generated, the `multiGenerator` method can be called:

    new SocialGraphicsLibrary.multiGenerator(tName, pName, [{
                    mode: 'twitch-title',
                    containerId: 'img-container-1',
                    imgMode: 'jpeg'
                }, {
                    mode: 'elavate-title',
                    containerId: 'img-container-2',
                    imgMode: 'jpeg',
                    generateLink: true
                }]

### Modifiers

- Team name:
  - The team name
- Player name:
  - The name of the player
- Mode:
  - The mode of the image to be generated
    - youtube-title
      - Generates a Youtube cover picture
    - twitch-title
      - Generates a Twitch cover photo
    - twitter-title
      - Generates a Twitter cover photo
    - elavate-title
      - Generates a Youtube cover picture
    - gaming
      - Generates a gaming logo

- Container ID:
  - Indicates the ID of the container which is the target for
       the generated image is used

- Image mode:
  - The mode of the image to be generated
    - png
    - svg
    - jpeg
    - webp

- Generate Link
  - This alternative mode ensures the automatic rendering of a download link
    - true
    - false

---
### Inject Template (Experimental Feature)

As an alternative to forking the project, it is possible to inject your own templates locally. To do this, simply install the NPM package with `npm i social-graphics-library`, then after the initialization a template can be injected with the following method:

    new SocialGraphicsLibrary.inject([
      {
        "callName": "template_name",
        "template": new Template()
      }
    ])

---

### Templates

In order to be able to generate a graphic, so-called template files must be prepared. These are typescript classes in which the basic data are stored.

A simple template is structured as follows:

    export class Example_Template {

      static readonly width: number = 1000;

      static readonly height: number = 1000;

      static template(teamName: string, playerName: string): string {
        teamName;
        playerName;
        return 'svg string';
      }
    }

> The class always(!) has a field for the width, one for the height and a method which returns the SVG string.

Various templates for the large social media platforms in .afpub format are available in the `assetes` folder for creating and adapting. These can be opened and edited with programs from the
[Affinity Family of Serif](http://affinity.serif.com/). Alternatively, the files generated from it are located in the `svg` directory.

### Caution!

> When creating an SVG file, it must be ensured that the later dynamic parts are stored as TEXT and not as a vector.

After the SVG is ready, it can be saved in the `svg` directory and the source code of the SVG is entered as a string in the `template()` method. The corresponding test points are replaced by the variables that are transferred to the method.

As long as the name of the file (and the class) is one of the existing ones, with the exception of the example, the example template can now simply be replaced and it will work with the new one. Should the name be different
the class must be entered in the glc file in the `generator` methods.

Then just compile, integrate and it's done.

![Example Gif](https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/Demo.gif)
