# Social Graphics Library

[![npm version](https://badge.fury.io/js/social-graphics-library.svg)](https://badge.fury.io/js/social-graphics-library)
[![GitHub issues](https://img.shields.io/github/issues/Social-graphics-library/Social-graphics-library)](https://github.com/Social-graphics-library/Social-graphics-library/issues)
[![GitHub forks](https://img.shields.io/github/forks/Social-graphics-library/Social-graphics-library)](https://github.com/Social-graphics-library/Social-graphics-library/network)
[![GitHub stars](https://img.shields.io/github/stars/Social-graphics-library/Social-graphics-library)](https://github.com/Social-graphics-library/Social-graphics-library/stargazers)
[![GitHub license](https://img.shields.io/github/license/Social-graphics-library/Social-graphics-library)](https://github.com/Social-graphics-library/Social-graphics-library/blob/master/LICENSE)
![npm](https://img.shields.io/npm/dt/social-graphics-library)
[![CodeFactor](https://www.codefactor.io/repository/github/social-graphics-library/social-graphics-library/badge)](https://www.codefactor.io/repository/github/social-graphics-library/social-graphics-library)
[![TypeScript](https://img.shields.io/badge/Developed%20in-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)

## Menü

- [Social Graphics Library](#social-graphics-library)
  - [Menü](#menü)
  - [Example/Beispiel](#examplebeispiel)
  - [German](#german)
    - [Einrichtung](#einrichtung)
    - [Einführung](#einführung)
    - [Hilfe](#hilfe)
    - [Aufbau](#aufbau)
    - [Modifikatoren](#modifikatoren)
    - [Nur DataURL](#nur-dataurl)
    - [Inject Template (Experimentelles Feature)](#inject-template-experimentelles-feature)
    - [Template prüfen](#template-prüfen)
    - [Alle injecteten Templates abfragen](#alle-injecteten-templates-abfragen)
    - [Vorlagen](#vorlagen)
    - [Achtung](#achtung)
    - [Template Generator](#template-generator)
  - [Vorschau](#vorschau)
  - [English](#english)
    - [Installation](#installation)
    - [Introduction](#introduction)
    - [Support](#support)
    - [Structure](#structure)
    - [Modifiers](#modifiers)
    - [DataURL only](#dataurl-only)
    - [Inject Template (Experimental Feature)](#inject-template-experimental-feature)
    - [Check template](#check-template)
    - [Query all injected templates](#query-all-injected-templates)
    - [Templates](#templates)
    - [Attention](#attention)
    - [Template generator](#template-generator-1)
  - [Preview](#preview)

---

## Example/Beispiel

```typescript
import { SocialGraphicsLibrary } from 'social-graphics-library';

const sgl = new SocialGraphicsLibrary();

console.log(SGL.info());

console.log(SGL.VERSION);

const generate = document.getElementById('generate') as HTMLButtonElement;
const tName = document.getElementById('tName') as HTMLInputElement;
const uName = document.getElementById('uName') as HTMLInputElement;

generate
 .addEventListener("click",
  async function () {
   sgl
    .multiGenerator(
     tName
     .value,
     uName.value, [{
       mode: 'twitch-title',
       containerId: 'img-container-1',
       imgMode: 'webp',
       generateLink: false
      }, {
       mode: 'twitter-title',
       containerId: 'img-container-3',
       imgMode: 'webp',
       generateLink: false
      }, {
       mode: 'youtube-title',
       containerId: 'img-container-4',
       imgMode: 'jpeg',
       generateLink: true
      }, {
       mode: 'logo',
       containerId: 'img-container-5',
       imgMode: 'png',
       generateLink: true
      }])

   console.log(
    await sgl.getImageDataUrl(
     tName.value,
     uName.value,
     'logo',
     'webp'
    ));
  });

sgl.inject([
 {
  "callName": "example_template",
  "template": new Example_Template() as Template
 },
 {
  "callName": "example_template2",
  "template": new Example_Template() as Template
 }
]);

console.log(
 sgl.checkTemplate("basic", "example_template")
);

console.log(
 sgl.checkTemplate("advanced", "example_template", new Example_Template() as Template)
);

console.log(
 sgl.checkTemplate("all")
);

console.log(
 sgl.getInjectedTemplates()
)
```

## German

### Einrichtung

> Für die neueste stabile Version:

```bash
    npm i social-graphics-library
```

### Einführung

Die **Social Graphics Library** nutzt `<canvas>`
zum Generieren von von SVG, PNG, JPEG und WebP Grafiken für Community Team Mitglieder und Spieler.

<img src="https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/sgl.png" alt="Logo" width="200px" height="auto" align="right" position="absolute">

### Hilfe

Es besteht auch Support über den [Software Support Discord Server](https://discord.gg/fraspbc)

### Aufbau

Zum Generieren einer Grafik wird die statische Funktion `generator`
auf der Klasse `SGL` aufgerufen:

```typescript
new SGL.generator(
    teamName,
    playerName,
    mode,
    containerId,
    imgMode
  );
```

Alternativ kann auch, sollten mehrere Grafiken generiert werden, die Methode `multiGenerator` aufgerufen werden:

```typescript
new SGL.multiGenerator(tName, pName, [{
          mode: 'twitch-title',
          containerId: 'img-container-1',
          imgMode: 'jpeg'
      }, {
          mode: 'elavate-title',
          containerId: 'img-container-2',
          imgMode: 'jpeg',
          generateLink: true
      }]);
```

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
  - Der Modus des zu generierenden Bildes
    - png
    - svg
    - jpeg
    - webp

- Generate Link
  - Dieser alternative Modus sorgt für das automatische Rendern eines Download Links
    - true
    - false

---

### Nur DataURL

Es besteht die möglichkeit, sich nur die dataURL des gewünschten Bildes zu generieren und diese zurück zu geben.
Hierfür wird die Methode `getImageDataUrl` auf der Klasse `SGL` aufgerufen. Diese gibt die entsprechende DataURL als Promise zurück.

Ein beispielhafter aufruf:

```typescript
await new SGL.getImageDataUrl(
  document.getElementById('M. Mustermann').value,
  document.getElementById('Mustercorp').value,
  'logo',
  'webp'
);
```

---

### Inject Template (Experimentelles Feature)

Es ist möglich, alternativ zum Forkend des Projektes, eigene Templates lokal zu injecten. Dazu einfach das NPM Packet installieren mit `npm i social-graphics-library` , danach kann nach der Initialisierung mit der folgenden Methode ein Template Injekted werden:

```typescript
new SGL.inject([
  {
    "callName": "template_name",
    "template": new Template()
  }
])
```

---

### Template prüfen

Um mögliche Fehler vorzubeugen, kann ein bereit injectetes, sowie ein noch nicht injectetes Template geprüft werden.
Hierfür steht die Methode `checkTemplate` zur Verfügung. Diese gibt einen Bool oder ein Response Objekt zurück.

Ein beispielhafter Aufruf:

```typescript
SGL.checkTemplate("basic", "example_template")

// Gibt true oder false zurück

SGL.checkTemplate("advanced", "example_template", new Example_Template())

// Gibt true oder false zurück

SGL.checkTemplate("all")

// Gibt entweder true oder ein Response Objekt zurück
```

> Für diesen Endpunkt stehen 3 Nutzungsmodi zur Verfügung:
>
> - basic
>   - Prüft, ob ein bereits injectetes Template vorhanden und valide ist.
>   - Gibt ein Bool zurück.
> - advanced
>   - Prüft, ob ein an dieser Stelle übergebenes Template vorhanden und valide ist.
>   - Gibt ein Bool zurück.
> - all
>   - Prüft alle bereits injecteten Templates.
>   - Gibt entweder true oder ein Response Object zurück.
>
> Das Default Verhalten bei fehlenden Parametern ist die Rückgabe von false.

---

### Alle injecteten Templates abfragen

Es besteht die Möglichkeit, alle injecteten Templates abzufragen. Dazu steht die Methode `getInjectedTemplates` zur Verfügung. Das Rückgabe Objekt enthält ein Array, bestehend aus Objekten, welche die Namen und die Klassen der injecteten Temnplates enthalten.

```typescript
SGL.getInjectedTemplates()

// Gibt ein Array aus Objekten zurück
// Beispiel:
// [
//    {
//      "callName":"example_template",
//      "template":{}
//    },
//    {
//      "callName":"example_template2",
//      "template":{}
//    }
//]
```

---

### Vorlagen

Um eine Grafik generieren zu können, müssen sogenannte Template Dateien vorbereitet werden. Dabei handelt es sich um Typescript Klassen, in welchen die Grunddaten hinterlegt sind.

Ein simples Template ist wie folgt aufgebaut:

```typescript
    export class Example_Template {

      static readonly width: number = 1000;

      static readonly height: number = 1000;

      static template(teamName: string, playerName: string): string {
        teamName;
        playerName;
        return 'svg string';
      }
    }
```

> Die Klasse hat immer(!) ein Feld für die Breite, eines für die Höhe und eine Methode, welche den SVG String zurückgibt.

Für das Erstellen und Anpassen liegen im `assetes` Ordner diverse Vorlagen für die großen Social Media Plattformen im .afpub Format vor. Diese können mit Programmen der [Affinity Familie von Serif](http://affinity.serif.com/) geöffnet und bearbeitet werden. Alternativ liegen im `svg` Verzeichnis die daraus generierten Files.

### Achtung

> Beim Anlegen eines SVG files muss darauf geachtet werden, dass die später dynamischen Teile als TEXT und nicht als Vektor hinterlegt sind.

Nachdem das SVG fertig ist, kann es im `svg` Verzeichnis gespeichert werden und der Sourcecode der SVG wird als String in die `template()` Methode eingepflegt. Dabei werden die entsprechenden Teststellen durch die Variablen ersetzt, die der Methode übergeben werden.

Solange der Name des Files (und der Klasse) einer der bestehenden, ausgenommen des Beispiels ist, kann jetzt das Beispieltemplate einfach ersetzt werden und es funktioniert mit dem neuen. Sollte der Name anders sein,
muss die Klasse im glc File in der `generator` methoden eingepflegt werden.

Danach nur noch kompilieren, einbinden und es ist fertig.

---

### Template Generator

Der [SGL Template Generator](https://github.com/Social-graphics-library/Template-Generator) ist ein auf Electron basierendes Werkzeug zur Generierung von JavaScript-/TypeScript-Vorlagenklassen für die Social Graphics Library aus SVG-Dateien. Die Dokumentation des Tools findet sich im entsprechenden Repository, sowie Downloadlinks für die aktuelle Version.

---

## Vorschau

![Example Gif](https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/Demo.gif)

---

## English

### Installation

> For the latest stable version:

```bash
npm i social-graphics-library
```

### Introduction

The **Social Graphics Library** uses `<canvas>`
to generate SVG, PNG, JPEG and WebP graphics for community team members and players.

<img src="https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/sgl.png" alt="Logo" width="200px" height="auto" align="right" position="absolute">

### Support

There is also support via the [Software Support Discord Server](https://discord.gg/fraspbc)

### Structure

The static function `generator` is used to generate a graphic
called on the class `SGL`:

```typescript
new SGL.generator(
    teamName,
    playerName,
    mode,
    containerId,
    imgMode
  );
```

Alternatively, if several graphics are to be generated, the `multiGenerator` method can be called:

```typescript
new SGL.multiGenerator(tName, pName, [{
          mode: 'twitch-title',
          containerId: 'img-container-1',
          imgMode: 'jpeg'
      }, {
          mode: 'elavate-title',
          containerId: 'img-container-2',
          imgMode: 'jpeg',
          generateLink: true
      }]
```

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

### DataURL only

It is possible to generate only the dataURL of the desired image and to return it.
For this the method `getImageDataUrl` is called on the class`SGL`. This returns the corresponding DataURL as a promise.

An exemplary call:

```typescript
await new SGL.getImageDataUrl (
  document.getElementById ('M. Mustermann'). value,
  document.getElementById ('Mustercorp'). value,
  'logo',
  'webp'
));
```

---

### Inject Template (Experimental Feature)

It is possible to inject your own templates locally as an alternative to forking the project. To do this, simply install the NPM package with `npm i social-graphics-library`, then a template can be injected after initialization with the following method:

```typescript
new SGL.inject([
  {
    "callName": "template_name",
    "template": new Template()
  }
])
```

---

### Check template

To prevent possible errors, a template that has already been injected and one that has not yet been injected can be checked.
The `checkTemplate` method is available for this purpose. This returns a bool or a response object.

An exemplary call:

```typescript
SGL.checkTemplate("basic", "example_template")

// Returns true or false

SGL.checkTemplate("advanced", "example_template", new Example_Template())

// Returns true or false

SGL.checkTemplate("all")

// Returns either true or a response object
```

> There are 3 usage modes available for this endpoint:
>
> - basic
> - Checks if an already injected template exists and is valid.
> - Returns a bool.
> - advanced
> - Checks if a template passed at this point is present and valid.
> - Returns a bool.
> - all
> - Checks all already injected templates.
> - Returns either true or a response object.
>
> The default behavior for missing parameters is to return false.

---

### Query all injected templates

It is possible to query all injected templates. The 'getInjectedTemplates' method is available for this purpose. The return object contains an array of objects that contain the names and classes of the injected templates.

```typescript
SGL.getInjectedTemplates()

// Returns an array of objects
// Example:
// [
// {
// "callName": "example_template",
// "template":{}
// },
// {
// "callName": "example_template2",
// "template":{}
// }
//]
```

---

### Templates

In order to be able to generate a graphic, so-called template files must be prepared. These are typescript classes in which the basic data are stored.

A simple template is structured as follows:

```typescript
export class Example_Template {

  static readonly width: number = 1000;

  static readonly height: number = 1000;

  static template(teamName: string, playerName: string): string {
    teamName;
    playerName;
    return 'svg string';
  }
}
```

> The class always(!) has a field for the width, one for the height and a method which returns the SVG string.

For creating and customizing, various templates for the major social media platforms are available in the `assetes` folder in .afpub format. These can be opened and edited with programs from the [Affinity family from Serif](http://affinity.serif.com/). Alternatively, the files generated from them are located in the `svg` directory.

### Attention

> When creating an SVG file, make sure that the dynamic parts are stored as TEXT and not as a vector.

After the SVG is ready, it can be saved in the `svg` directory and the source code of the SVG is fed as a string into the `template()` method. Thereby the corresponding test places are replaced by the variables that are passed to the method.

As long as the name of the file (and the class) is one of the existing ones, except for the example, the example template can now simply be replaced and it will work with the new one. Should the name be different
you have to add the class in the sgl file in the `generator` methods.

After that just compile, include and it is ready.

---

### Template generator

The [SGL Template Generator](https://github.com/Social-graphics-library/Template-Generator) is an Electron-based tool for generating JavaScript/TypeScript template classes for the Social Graphics Library from SVG files. Documentation for the tool can be found in the corresponding repository, as well as download links for the current version.

---

## Preview

![Example Gif](https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/Demo.gif)
