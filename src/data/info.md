---
templateKey: info
title: "Kernkonzepte"
path: /info
date: "2018-07-05"
description: >
  React ist eine JavaScript-Softwarebibliothek, 
  die ein Grundgerüst für die Ausgabe von User-Interface-Komponenten
  von Webseiten zur Verfügung stellt (Webframework). 
  Komponenten werden in React hierarchisch aufgebaut und können
  in dessen Syntax als selbst definierte HTML-Tags repräsentiert werden.
  Das Modell von React verspricht durch die Konzepte des
  unidirektionalen Datenflusses und des „Virtual DOM“ den
  einfachen, aber trotzdem performanten Aufbau auch
  komplexer Anwendungen. React bildet typischerweise die Basis
  für Single-Page-Webanwendungen, kann jedoch auch mittels Node.js
  serverseitig (vor-)gerendert werden.
---

### Kernkonzepte
#### Unidirektionaler Datenfluss
  In Kombination mit der deklarativen Natur der Komponentendefinition in React soll 
  mittels eines unidirektionalen Datenflussmodells der Aufbau 
  und die Wechselwirkungen zwischen Komponenten vereinfacht werden. 
  Anders als beispielsweise mittels komplexem Event Handling erhält eine 
  Komponente Daten nur über statische Eigenschaften, die dieser übergeben wurden. 
  Eine Komponente kann ihr übergebene Eigenschaften in diesem Modell nicht abändern. 
  Eigenschaften können jedoch übergebene Callback-Funktionen sein und somit die 
  übergeordneten Komponenten beeinflussen.

#### Virtual DOM und DOM-Diffing
  Die Kernidee von React besteht in der Annahme, 
  dass der komplette, der betroffenen Komponente untergeordnete, 
  Anwendungsbaum bei jeder Änderung einer Eigenschaft der Komponente neu 
  aufgebaut wird. Da es in der Praxis performanceintensiv sein kann, dies z. B. 
  im Webbrowser innerhalb des DOM durchzuführen, wurde das Konzept des „Virtual DOM“ 
  geschaffen. Die damit verbundene Technik des „DOM-Diffing“ beschreibt 
  das selektive Aktualisieren des DOM auf Basis eines Vergleichs zwischen 
  ursprünglichem und geänderten Virtual DOM.
  Als Beispiel kann ein Entwickler bei einer Messaging-Anwendung in einer 
  Inbox davon ausgehen, dass die Auflistung aller Nachrichten und der untenstehende 
  Zähler der Nachrichtenanzahl bei jeder neuen Nachricht komplett neu aufgebaut werden. 
  Das DOM-Diffing sorgt in diesem Fall dafür, dass lediglich die veränderten Teile 
  (in diesem Fall das Ergänzen der neuen Nachricht und das Aktualisieren des Zählers) 
  im DOM aktualisiert werden.

#### JavaScript syntax extension (JSX)
  Mit Hilfe der eingebauten, an XML angelehnten Template-Sprache JSX 
  (Javascript XML) steht optional eine Syntax für die Deklaration von 
  React-Komponenten zur Verfügung, welche es erlaubt, Javascript-Logik, 
  HTML und CSS in eine React-Komponente einzukapseln und modular in Web-Applikationen 
  einzusetzen.