var quailTests = 
{
  "aAdjacentWithSameResourceShouldBeCombined": {
    "callback": "aAdjacentWithSameResourceShouldBeCombined",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "2.4.4": {
          "techniques": [
            "H2"
          ]
        }
      }
    },
    "title": {
      "en": "Adjacent links that point to the same location should be merged"
    },
    "description": {
      "en": "Because many users of screen-readers use links to navigate the page, providing two links right next to eachother that points to the same location can be confusing. Try combining the links."
    }
  },
  "aImgAltNotRepetative": {
    "callback": "aImgAltNotRepetative",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H30"
          ]
        },
        "2.4.4": {
          "techniques": [
            "H30"
          ]
        },
        "2.4.9": {
          "techniques": [
            "H30"
          ]
        }
      }
    },
    "title": {
      "en": "When an image is in a link, its \"alt\" attribute should not repeat other text in the link"
    },
    "description": {
      "en": "Images within a link should not have an alt attribute that simply repeats the text found in the link. This will cause screen readers to simply repeat the text twice."
    }
  },
  "aLinkTextDoesNotBeginWithRedundantWord": {
    "callback": "aLinkTextDoesNotBeginWithRedundantWord",
    "strings": "redundant.link",
    "tags": [
      "link",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "2.4.9": {
          "techniques": [
            "F84"
          ]
        }
      }
    },
    "title": {
      "en": "Link text should not begin with redundant text"
    },
    "description": {
      "en": "Link text should not begin with redundant words or phrases like \"link\""
    }
  },
  "aLinksAreSeperatedByPrintableCharacters": {
    "callback": "aLinksAreSeperatedByPrintableCharacters",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Lists of links should be seperated by printable characters"
    },
    "description": {
      "en": "If a list of links is provided within the same element, those links should be seperated by a non-linked, printable character. Structures like lists are not included in this."
    }
  },
  "aLinksDontOpenNewWindow": {
    "selector": "a[target=_new], a[target=_blank], a[target=_blank]",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "3.2.5": {
          "techniques": [
            "H83"
          ]
        }
      }
    },
    "title": {
      "en": "Links should not open a new window without warning"
    },
    "description": {
      "en": "Links which open a new window using the \"target\" attribute should warn users."
    }
  },
  "aLinksNotSeparatedBySymbols": {
    "callback": "aLinksNotSeparatedBySymbols",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": []
  },
  "aLinksToMultiMediaRequireTranscript": {
    "selector": "a[href$='.wmv'], a[href$='.mpg'], a[href$='.mov'], a[href$='.ram'], a[href$='.aif']",
    "tags": [
      "link",
      "media",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "c"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74"
          ]
        }
      }
    },
    "title": {
      "en": "Any links to a multimedia file should also include a link to a transcript"
    },
    "description": {
      "en": "Links to a multimedia file should be followed by a link to a transcript of the file."
    }
  },
  "aLinksToSoundFilesNeedTranscripts": {
    "selector": "a[href$='.wav'], a[href$='.snd'], a[href$='.mp3'], a[href$='.iff'], a[href$='.svx'], a[href$='.sam'], a[href$='.smp'], a[href$='.vce'], a[href$='.vox'], a[href$='.pcm'], a[href$='.aif']",
    "tags": [
      "link",
      "media",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "c"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74"
          ]
        }
      }
    },
    "title": {
      "en": "Any links to a sound file should also include a link to a transcript"
    },
    "description": {
      "en": "Links to a sound file should be followed by a link to a transcript of the file."
    }
  },
  "aMultimediaTextAlternative": {
    "selector": "a[href$='.wmv'], a[href$='.wav'], a[href$='.mpg'], a[href$='.mov'], a[href$='.ram'], a[href$='.aif']",
    "tags": [
      "link",
      "media",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": []
  },
  "aMustContainText": {
    "callback": "aMustContainText",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H30"
          ]
        },
        "2.4.4": {
          "techniques": [
            "H30"
          ]
        },
        "2.4.9": {
          "techniques": [
            "H30"
          ]
        }
      }
    },
    "title": {
      "en": "Links should contain text"
    },
    "description": {
      "en": "Because many users of screen-readers use links to navigate the page, providing links with no text (or with images that have empty \"alt\" attributes and no other readable text) hinders these users."
    }
  },
  "aMustHaveTitle": {
    "selector": "a:not(a[title])",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All links must have a \"title\" attribute"
    },
    "description": {
      "en": "Every link must have a \"title\" attribute."
    }
  },
  "aMustNotHaveJavascriptHref": {
    "selector": "a[href^='javascript:']",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Links should not use \"javascript\" in their location"
    },
    "description": {
      "en": "Anchor (<code>a</code>.  elements may not use the \"javascript\" protocol in their \"href\" attributes."
    }
  },
  "aSuspiciousLinkText": {
    "callback": "aSuspiciousLinkText",
    "strings": "suspiciousLinks",
    "tags": [
      "link",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H30"
          ]
        },
        "2.4.4": {
          "techniques": [
            "H30"
          ]
        },
        "2.4.9": {
          "techniques": [
            "H30"
          ]
        }
      }
    },
    "title": {
      "en": "Link text should be useful"
    },
    "description": {
      "en": "Because many users of screen-readers use links to navigate the page, providing links with text that simply read \"click here\" gives no hint of the function of the link"
    }
  },
  "aTitleDescribesDestination": {
    "selector": "a[title]",
    "tags": [
      "link",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.4.9": {
          "techniques": [
            "H33",
            "H25"
          ]
        }
      }
    },
    "title": {
      "en": "The title attribute of all source a (anchor) elements describes the link destination."
    },
    "description": {
      "en": "Every link must have a \"title\" attribute which describes the purpose or destination of the link."
    }
  },
  "addressForAuthor": {
    "selector": "body:not(body:has(address))",
    "tags": [
      "document"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The document should contain an address for the author"
    },
    "description": {
      "en": "Documents should provide a valid email address within an <code>address</code> element."
    }
  },
  "addressForAuthorMustBeValid": {
    "selector": "address",
    "tags": [
      "document"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The document should contain a valid email address for the author"
    },
    "description": {
      "en": "Documents should provide a valid email address within an <code>address</code> element."
    }
  },
  "appletContainsTextEquivalent": {
    "callback": "appletContainsTextEquivalent",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "508": [
        "m"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74",
            "H35"
          ]
        }
      }
    },
    "title": {
      "en": "All applets should contain the same content within the body of the applet"
    },
    "description": {
      "en": "Applets should contain their text equivalents or description within the <code>applet</code> tag itself."
    }
  },
  "appletContainsTextEquivalentInAlt": {
    "attribute": "alt",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "applet",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 0.5,
    "type": "placeholder",
    "guidelines": {
      "508": [
        "m"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74",
            "H35"
          ]
        }
      }
    },
    "title": {
      "en": "All applets should contain a text equivalent in the \"alt\" attribute"
    },
    "description": {
      "en": "Applets should contain their text equivalents or description in an \"alt\" attribute."
    }
  },
  "appletProvidesMechanismToReturnToParent": {
    "selector": "applet",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All applets should provide a way for keyboard users to escape"
    },
    "description": {
      "en": "Ensure that a user who has only a keyboard as an input device can escape an <code>applet</code> element. This requires manual confirmation."
    }
  },
  "appletTextEquivalentsGetUpdated": {
    "selector": "applet",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "m"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74",
            "H35"
          ]
        }
      }
    }
  },
  "appletUIMustBeAccessible": {
    "selector": "applet",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "m"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74",
            "H35"
          ]
        }
      }
    },
    "title": {
      "en": "Any user interface in an applet must be accessible"
    },
    "description": {
      "en": "Applet content should be assessed for accessibility."
    }
  },
  "appletsDoNotFlicker": {
    "selector": "applet",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "j"
      ],
      "wcag": {
        "2.2.2": {
          "techniques": [
            "F7"
          ]
        }
      }
    },
    "title": {
      "en": "All applets do not flicker"
    },
    "description": {
      "en": "Applets should not flicker."
    }
  },
  "appletsDoneUseColorAlone": {
    "selector": "applet",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "c"
      ]
    },
    "title": {
      "en": "Applets should not use color alone to communicate content"
    },
    "description": {
      "en": "Applets should contain content that makes sense without color and is accessible to users who are color blind."
    }
  },
  "areaAltIdentifiesDestination": {
    "selector": "area[alt]",
    "tags": [
      "objects",
      "applet",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74"
          ]
        }
      }
    },
    "title": {
      "en": "All \"area\" elements must have an \"alt\" attribute which describes the link destination"
    },
    "description": {
      "en": "All <code>area</code> elements within a <code>map</code> must have an \"alt\" attribute"
    }
  },
  "areaAltRefersToText": {
    "selector": "area",
    "tags": [
      "imagemap",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Alt text for \"area\" elements should replicate the text found in the image"
    },
    "description": {
      "en": "If an image is being used as a map, and an <code>area</code> encompasses text within the image, then the \"alt\" attribute of that <code>area</code> element should be the same as the text found in the image."
    }
  },
  "areaDontOpenNewWindow": {
    "selector": "area[target='new window'], area[target=_new], area[target=_blank], area[target=_blank]",
    "tags": [
      "imagemap",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "No \"area\" elements should open a new window without warning"
    },
    "description": {
      "en": "No <code>area</code> elements should open a new window without warning."
    }
  },
  "areaHasAltValue": {
    "selector": "area:not(area[alt])",
    "tags": [
      "imagemap",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "F65",
            "G74",
            "H24"
          ]
        },
        "1.4.3": {
          "techniques": [
            "G145"
          ]
        }
      }
    },
    "title": {
      "en": "All \"area\" elements must have an \"alt\" attribute"
    },
    "description": {
      "en": "All <code>area</code> elements within a <code>map</code> must have an \"alt\" attribute."
    }
  },
  "areaLinksToSoundFile": {
    "selector": "area[href$=wav], area[href$=snd], area[href$=mp3], area[href$=iff], area[href$=svx], area[href$=sam], area[href$=smp], area[href$=vce], area[href$=vox], area[href$=pcm], area[href$=aif]",
    "tags": [
      "imagemap",
      "media",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74"
          ]
        }
      }
    },
    "title": {
      "en": "All \"area\" elements which link to a sound file should also provide a link to a transcript"
    },
    "description": {
      "en": "All <code>area</code> elements which link to a sound file should have a text transcript"
    }
  },
  "ariaOrphanedContent": {
    "selector": "body *:not(*[role] *, *[role], script, meta, link)",
    "tags": [
      "aria",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Pages using ARIA roles should not have orphaned content"
    },
    "description": {
      "en": "If a page makes use of ARIA roles, then there should not be any content on the page which is not within an element that exposes a role, as it could cause that content to be rendreed inaccessible to users with screen readers."
    }
  },
  "basefontIsNotUsed": {
    "selector": "basefont",
    "tags": [
      "document",
      "deprecated"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Basefont should not be used"
    },
    "description": {
      "en": "The <code>basefont</code> tag is deprecated and should not be used. Investigate using stylesheets instead."
    }
  },
  "blinkIsNotUsed": {
    "selector": "blink",
    "tags": [
      "deprecated",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.2.2": {
          "techniques": [
            "F47"
          ]
        }
      }
    },
    "title": {
      "en": "The \"blink\" tag should not be used"
    },
    "description": {
      "en": "The <code>blink</code> tag should not be used. Ever."
    }
  },
  "blockquoteNotUsedForIndentation": {
    "selector": "blockquote:not(blockquote[cite])",
    "tags": [
      "blockquote",
      "content"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H49"
          ]
        }
      }
    },
    "title": {
      "en": "The \"blockquote\" tag should not be used just for indentation"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "blockquoteUseForQuotations": {
    "callback": "blockquoteUseForQuotations",
    "tags": [
      "blockquote",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H49"
          ]
        }
      }
    },
    "title": {
      "en": "If long quotes are in the document, use the \"blockquote\" element to mark them"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "bodyActiveLinkColorContrast": {
    "algorithm": "wcag",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "alink",
    "components": [
      "color"
    ],
    "selector": "a:active",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": [],
    "title": {
      "en": "Contrast between active link text and background should be 5:1"
    },
    "description": {
      "en": "The contrast ratio of active link text should be at lest 5:1 between the foreground text and the background. <a href=\"http://www.w3.org/TR/WCAG20/#contrast-ratiodef\">Learn more about color contrast and how to measure it.</a>"
    }
  },
  "bodyColorContrast": {
    "algorithm": "wcag",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "text",
    "components": [
      "color"
    ],
    "selector": "body",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": [],
    "title": {
      "en": "Contrast between text and background should be 5:1"
    },
    "description": {
      "en": "The contrast ratio of text should be at lest 5:1 between the foreground text and the background. <a href=\"http://www.w3.org/TR/WCAG20/#contrast-ratiodef\">Learn more about color contrast and how to measure it.</a>"
    }
  },
  "bodyLinkColorContrast": {
    "algorithm": "wcag",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "link",
    "components": [
      "color"
    ],
    "selector": "a",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": [],
    "title": {
      "en": "Contrast between link text and background should be 5:1"
    },
    "description": {
      "en": "The contrast ratio of link text should be at lest 5:1 between the foreground text and the background. <a href=\"http://www.w3.org/TR/WCAG20/#contrast-ratiodef\">Learn more about color contrast and how to measure it.</a>"
    }
  },
  "bodyMustNotHaveBackground": {
    "selector": "body[background]",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Body elements do not use a background image"
    },
    "description": {
      "en": "The <code>body</code> element for the page may not have a \"background\" attribute."
    }
  },
  "bodyVisitedLinkColorContrast": {
    "algorithm": "wcag",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "vlink",
    "components": [
      "color"
    ],
    "selector": "a:visited",
    "tags": [
      "link",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": [],
    "title": {
      "en": "Contrast between visited link text and background should be 5:1"
    },
    "description": {
      "en": "The contrast ratio of visited link text should be at lest 5:1 between the foreground text and the background. <a href=\"http://www.w3.org/TR/WCAG20/#contrast-ratiodef\">Learn more about color contrast and how to measure it.</a>"
    }
  },
  "boldIsNotUsed": {
    "selector": "bold",
    "tags": [
      "semantics",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The \"b\" (bold) element is not used"
    },
    "description": {
      "en": "The <code>b</code> (bold) element provides no emphasis for non-sighted readers. Use the <code>strong</code> tag instead."
    }
  },
  "checkboxHasLabel": {
    "components": [
      "label"
    ],
    "selector": "input[type=checkbox]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "label",
    "guidelines": {
      "508": [
        "c"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "All checkboxes must have a corresponding label"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"checkbox\" should have a corresponding <code>label</code> element. Screen readers often enter a \"form mode\" where only label text is read aloud to the user"
    }
  },
  "checkboxLabelIsNearby": {
    "components": [
      "labelProximity"
    ],
    "selector": "input[type=checkbox]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0.5,
    "type": "labelProximity",
    "guidelines": [],
    "title": {
      "en": "All \"checkbox\" input elements have a label that is close"
    },
    "description": {
      "en": "All input elements of type \"checkbox\" must have a corresponding label that is close to the form element. Users of screen magnification or with reduced spatial skills are hampered in using a form element if the label for that element is located far away."
    }
  },
  "cssDocumentMakesSenseStyleTurnedOff": {
    "selector": "link[rel=stylesheet], stylesheet, *[style]",
    "tags": [
      "color"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "G140"
          ]
        },
        "1.4.5": {
          "techniques": [
            "G140"
          ]
        },
        "1.4.9": {
          "techniques": [
            "G140"
          ]
        }
      }
    },
    "title": {
      "en": "The document must be readable with styles turned off"
    },
    "description": {
      "en": "With all the styles for a page turned off, the content of the page should still make sense. Try to turn styles off in the browser and see if the page content is readable and clear."
    }
  },
  "cssTextHasContrast": {
    "algorithm": "wcag",
    "bodyBackgroundAttribute": "color",
    "bodyForegroundAttribute": "background",
    "components": [
      "color"
    ],
    "selector": "*",
    "tags": [
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": {
      "wcag": {
        "1.4.3": {
          "techniques": [
            "G18"
          ]
        }
      }
    },
    "title": {
      "en": "All elements should have appropriate color contrast"
    },
    "description": {
      "en": "For users who have color blindness, all text or other elements should have a color contrast of 5:1."
    }
  },
  "doctypeProvided": {
    "callback": "doctypeProvided",
    "tags": [
      "doctype"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "The document should contain a valid \"doctype\" declaration"
    },
    "description": {
      "en": "Each document must contain a valid doctype declaration.."
    }
  },
  "documentAbbrIsUsed": {
    "callback": "documentAbbrIsUsed",
    "components": [
      "acronym"
    ],
    "tags": [
      "acronym",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "3.1.4": {
          "techniques": [
            "H28"
          ]
        }
      }
    },
    "title": {
      "en": "Abbreviations must be marked with an \"abbr\" element"
    },
    "description": {
      "en": "Abbreviations should be marked with an <code>abbr</code> element, at least once on the page for each abbreviation."
    }
  },
  "documentAcronymsHaveElement": {
    "callback": "documentAcronymsHaveElement",
    "components": [
      "acronym"
    ],
    "tags": [
      "acronym",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "3.1.4": {
          "techniques": [
            "H28"
          ]
        }
      }
    },
    "title": {
      "en": "Acronyms must be marked with an \"acronym\" element"
    },
    "description": {
      "en": "Abbreviations should be marked with an <code>acronym</code> element, at least once on the page for each abbreviation."
    }
  },
  "documentAllColorsAreSet": {
    "selector": "body:not(body[text][bgcolor][link][alink][vlink], body:not(body[text], body[bgcolor], body[link], body[alink], body[vlink]))",
    "tags": [
      "deprecated",
      "color"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All the document colors must be set"
    },
    "description": {
      "en": "If any colors for text or the background are set in the <code>body</code> element, then all colors must be set."
    }
  },
  "documentAutoRedirectNotUsed": {
    "selector": "meta[http-equiv=refresh]",
    "tags": [
      "document"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Auto-redirect with \"meta\" elements must not be used"
    },
    "description": {
      "en": "Because different users have different speeds and abilities when it comes to parsing the content of a page, a \"meta-refresh\" method to redirect users can prevent users from fully understanding the document before being redirected. If a pure redirect is needed"
    }
  },
  "documentColorWaiActiveLinkAlgorithm": {
    "algorithm": "wai",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "alink",
    "components": [
      "color"
    ],
    "selector": "a:active",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": []
  },
  "documentColorWaiAlgorithm": {
    "algorithm": "wai",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "text",
    "components": [
      "color"
    ],
    "selector": "body",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": []
  },
  "documentColorWaiLinkAlgorithm": {
    "algorithm": "wai",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "link",
    "components": [
      "color"
    ],
    "selector": "a",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": []
  },
  "documentColorWaiVisitedLinkAlgorithm": {
    "algorithm": "wai",
    "bodyBackgroundAttribute": "bgcolor",
    "bodyForegroundAttribute": "vlink",
    "components": [
      "color"
    ],
    "selector": "a:visited",
    "tags": [
      "document",
      "color"
    ],
    "testability": 1,
    "type": "color",
    "guidelines": []
  },
  "documentContentReadableWithoutStylesheets": {
    "selector": "html:has(link[rel=stylesheet], style) body, body:has(*[style])",
    "tags": [
      "document",
      "color"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "d"
      ],
      "wcag": {
        "1.3.1": {
          "techniques": [
            "G140"
          ]
        },
        "1.4.5": {
          "techniques": [
            "G140"
          ]
        },
        "1.4.9": {
          "techniques": [
            "G140"
          ]
        }
      }
    },
    "title": {
      "en": "Content should be readable without style sheets"
    },
    "description": {
      "en": "With all the styles for a page turned off, the content of the page should still make sense. Try to turn styles off in the browser and see if the page content is readable and clear."
    }
  },
  "documentHasTitleElement": {
    "selector": "html:not(html:has(title))",
    "tags": [
      "document",
      "head"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.4.2": {
          "techniques": [
            "H25"
          ]
        }
      }
    },
    "title": {
      "en": "The document should have a title element"
    },
    "description": {
      "en": "The document should have a title element."
    }
  },
  "documentIDsMustBeUnique": {
    "callback": "documentIDsMustBeUnique",
    "tags": [
      "document",
      "semantics"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "4.1.1": {
          "techniques": [
            "F77"
          ]
        }
      }
    },
    "title": {
      "en": "All element \"id\" attributes must be unique"
    },
    "description": {
      "en": "Element \"id\" attributes must be unique."
    }
  },
  "documentIsWrittenClearly": {
    "callback": "documentIsWrittenClearly",
    "components": [
      "textStatistics"
    ],
    "tags": [
      "language",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "3.1.5": {
          "techniques": [
            "G86"
          ]
        }
      }
    },
    "title": {
      "en": "The document should be written to the target audience and read clearly"
    },
    "description": {
      "en": "If a document is beyond a 10th grade level, then a summary or other guide should also be provided to guide the user through the content."
    }
  },
  "documentLangIsISO639Standard": {
    "callback": "documentLangIsISO639Standard",
    "strings": "languageCodes",
    "tags": [
      "document",
      "language"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "3.1.1": {
          "techniques": [
            "H57"
          ]
        }
      }
    },
    "title": {
      "en": "The document's language attribute should be a standard code"
    },
    "description": {
      "en": "The document should have a default langauge, and that language should use the valid 2 or 3 letter language code according to ISO specification 639."
    }
  },
  "documentLangNotIdentified": {
    "selector": "html:not(html[lang])",
    "tags": [
      "document",
      "language"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The document must have a \"lang\" attribute"
    },
    "description": {
      "en": "The document should have a default langauge, by setting the \"lang\" attribute in the <code>html</code> element."
    }
  },
  "documentMetaNotUsedWithTimeout": {
    "selector": "meta[http-equiv=refresh]",
    "tags": [
      "document"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.2.1": {
          "techniques": [
            "F40",
            "F41"
          ]
        },
        "2.2.4": {
          "techniques": [
            "F40",
            "F41"
          ]
        },
        "3.2.5": {
          "techniques": [
            "F41"
          ]
        }
      }
    },
    "title": {
      "en": "Meta elements must not be used to refresh the content of a page"
    },
    "description": {
      "en": "Because different users have different speeds and abilities when it comes to parsing the content of a page, a \"meta-refresh\" method to reload the content of the page can prevent users from having full access to the content. Try to use a \"refresh this\" link instead.."
    }
  },
  "documentReadingDirection": {
    "selector": "*[lang=he]:not(*[dir=rtl]), *[lang=ar]:not(*[dir=rtl])",
    "tags": [
      "document",
      "language"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.2": {
          "techniques": [
            "H34"
          ]
        }
      }
    },
    "title": {
      "en": "Reading direction of text is correctly marked"
    },
    "description": {
      "en": "Where required, the reading direction of the document (for language that read in different directions), or portions of the text, must be declared."
    }
  },
  "documentStrictDocType": {
    "callback": "documentStrictDocType",
    "tags": [
      "document",
      "doctype"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "The page uses a strict doctype"
    },
    "description": {
      "en": "The doctype of the page or document should be either an HTML or XHTML strict doctype."
    }
  },
  "documentTitleDescribesDocument": {
    "selector": "head title:first",
    "tags": [
      "document",
      "head"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.4.2": {
          "techniques": [
            "F25",
            "G88"
          ]
        }
      }
    },
    "title": {
      "en": "The title describes the document"
    },
    "description": {
      "en": "The document title should actually describe the page. Often, screen readers use the title to navigate from one window to another."
    }
  },
  "documentTitleIsNotPlaceholder": {
    "components": [
      "placeholder"
    ],
    "content": true,
    "selector": "head title:first",
    "tags": [
      "document",
      "head"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "2.4.2": {
          "techniques": [
            "F25",
            "G88"
          ]
        }
      }
    },
    "title": {
      "en": "The document title should not be placeholder text"
    },
    "description": {
      "en": "The document title should not be wasted placeholder text which does not describe the page."
    }
  },
  "documentTitleIsShort": {
    "callback": "documentTitleIsShort",
    "tags": [
      "document",
      "head"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "The document title should be short"
    },
    "description": {
      "en": "The document title should be short and succinct. This test fails at 150 characters, but authors should consider this to be a suggestion."
    }
  },
  "documentTitleNotEmpty": {
    "components": [
      "placeholder"
    ],
    "content": true,
    "empty": true,
    "selector": "head title",
    "tags": [
      "document",
      "head"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "2.4.2": {
          "techniques": [
            "F25",
            "H25"
          ]
        }
      }
    },
    "title": {
      "en": "The document should not have an empty title"
    },
    "description": {
      "en": "The document should have a title element that is not white space"
    }
  },
  "documentValidatesToDocType": {
    "callback": "documentValidatesToDocType",
    "tags": [
      "document",
      "doctype"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "4.1.1": {
          "techniques": [
            "G134"
          ]
        }
      }
    },
    "title": {
      "en": "Document must validate to the doctype"
    },
    "description": {
      "en": "The document must validate to the declared doctype."
    }
  },
  "documentVisualListsAreMarkedUp": {
    "callback": "documentVisualListsAreMarkedUp",
    "tags": [
      "list",
      "semantics",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H28",
            "T2"
          ]
        }
      }
    },
    "title": {
      "en": "Visual lists of items are marked using ordered or unordered lists"
    },
    "description": {
      "en": "Use the ordered (<code>ol</code>.  or unordered (<code>ul</code>.  elements for lists of items, instead of just using new lines which start with numbers or characters to create a visual list."
    }
  },
  "documentWordsNotInLanguageAreMarked": {
    "selector": "body",
    "tags": [
      "language"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "3.1.2": {
          "techniques": [
            "H58"
          ]
        }
      }
    },
    "title": {
      "en": "Any words or phrases which are not the document's primary language should be marked"
    },
    "description": {
      "en": "If a document has words or phrases which are not in the document's primary language, those words or phrases should be properly marked. This helps indicate which language or voice a screen-reader should use to read the text."
    }
  },
  "embedHasAssociatedNoEmbed": {
    "callback": "embedHasAssociatedNoEmbed",
    "tags": [
      "object",
      "embed",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H46"
          ]
        }
      }
    },
    "title": {
      "en": "All \"embed\" elements have an associated \"noembed\" element"
    },
    "description": {
      "en": "Because some users cannot use the <code>embed</code> element, provide alternative content in a <code>noembed</code> element."
    }
  },
  "embedMustHaveAltAttribute": {
    "selector": "embed:not(embed[alt])",
    "tags": [
      "object",
      "embed",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Embed\" elements must have an \"alt\" attribute"
    },
    "description": {
      "en": "All <code>embed</code> elements must have an \"alt\" attribute."
    }
  },
  "embedMustNotHaveEmptyAlt": {
    "selector": "embed[alt='']",
    "tags": [
      "object",
      "embed",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Embed\" elements cannot have an empty \"alt\" attribute"
    },
    "description": {
      "en": "All <code>embed</code> elements must have an \"alt\" attribute that is not empty."
    }
  },
  "embedProvidesMechanismToReturnToParent": {
    "selector": "embed",
    "tags": [
      "object",
      "embed",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.1.2": {
          "techniques": [
            "G21"
          ]
        }
      }
    },
    "title": {
      "en": "All embed elements should provide a way for keyboard users to escape"
    },
    "description": {
      "en": "Ensure that a user who has only a keyboard as an input device can escape an <code>embed</code> element. This requires manual confirmation."
    }
  },
  "emoticonsExcessiveUse": {
    "callback": "emoticonsExcessiveUse",
    "strings": "emoticons",
    "tags": [
      "language",
      "emoticons",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H86"
          ]
        }
      }
    },
    "title": {
      "en": "Emoticons should not be used excessively"
    },
    "description": {
      "en": "Emoticons should not be used excessively to communicate feelings or content. Try to rewrite the document to have more textual meaning, or wrapping the emoticons in an <code>abbr</code> element as outlined below. Emoticons are not read by screen-readers, and are often used to communicate feelings or other things which are relevant to the content of the document."
    }
  },
  "emoticonsMissingAbbr": {
    "callback": "emoticonsMissingAbbr",
    "strings": "emoticons",
    "tags": [
      "language",
      "emoticons",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H86"
          ]
        }
      }
    },
    "title": {
      "en": "Emoticons should have abbreviations"
    },
    "description": {
      "en": "Emoticons are not read by screen-readers, and are often used to communicate feelings or other things which are relevant to the content of the document. If this emoticon is important content, mark it up with an \"abbr\" or \"acronym\" tag."
    }
  },
  "fileHasLabel": {
    "components": [
      "label"
    ],
    "selector": "input[type=file]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "label",
    "guidelines": {
      "508": [
        "n"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "All \"file\" input elements have a corresponding label"
    },
    "description": {
      "en": "All <code>input</code> elements of type \"file\" should have a corresponding <code>label</code> element. Screen readers often enter a \"form mode\" where only label text is read aloud to the user"
    }
  },
  "fileLabelIsNearby": {
    "components": [
      "labelProximity"
    ],
    "selector": "input[type=file]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0.5,
    "type": "labelProximity",
    "guidelines": [],
    "title": {
      "en": "All \"file\" input elements have a label that is close"
    },
    "description": {
      "en": "All input elements of type \"file\" must have a corresponding label that is close to the form element. Users of screen magnification or with reduced spatial skills are hampered in using a form element if the label for that element is located far away."
    }
  },
  "fontIsNotUsed": {
    "selector": "font",
    "tags": [
      "deprecated",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Font elements should not be used"
    },
    "description": {
      "en": "The <code>basefont</code> tag is deprecated and should not be used. Investigate using stylesheets instead."
    }
  },
  "formAllowsCheckIfIrreversable": {
    "selector": "form",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": []
  },
  "formDeleteIsReversable": {
    "selector": "form",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Deleting items using a form should be reversable"
    },
    "description": {
      "en": "Check that, if a form has the option to delete an item, that the user has a chance to either reverse the delete process, or is asked for confirmation before the item is deleted. This is not something that can be checked through automated testing and requires manual confirmation."
    }
  },
  "formErrorMessageHelpsUser": {
    "selector": "form",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Forms offer the user a way to check the results of their form before performing an irrevokable action"
    },
    "description": {
      "en": "If the form allows users to perform some irrevokable action, like ordreing a product, ensure that users have the ability to review the contents of the form they submitted first. This is not something that can be checked through automated testing and requires manual confirmation."
    }
  },
  "formHasGoodErrorMessage": {
    "selector": "form",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Form error messages should assist in solving errors"
    },
    "description": {
      "en": "If the form has some required fields or other ways in which the user can commit an error, check that the reply is accessible. Use the words \"required\" or \"error\" within the <code>label</code> element of input items where the errors happened"
    }
  },
  "formWithRequiredLabel": {
    "callback": "formWithRequiredLabel",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "ARIA2"
          ]
        },
        "1.4.1": {
          "techniques": [
            "F81"
          ]
        },
        "3.3.2": {
          "techniques": [
            "ARIA2",
            "H90"
          ]
        },
        "3.3.3": {
          "techniques": [
            "ARIA2"
          ]
        }
      }
    },
    "title": {
      "en": "Input items which are required are marked as so in the label element"
    },
    "description": {
      "en": "If a form element is required, it should marked as so. This should not be a mere red asterisk, but instead either a 'required' image with alt text of \"required\" or the actual text \"required.\" The indicator that an item is required should be included in the input element's <code>label</code> element."
    }
  },
  "frameIsNotUsed": {
    "selector": "frame",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Frames are not used"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "frameRelationshipsMustBeDescribed": {
    "selector": "frameset:not(frameset[longdesc])",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Complex framesets should contain a \"longdesc\" attribute"
    },
    "description": {
      "en": "If a <code>frameset</code> contains three or more frames, use a \"longdesc\" attribute to help describe the purpose of the frames."
    }
  },
  "frameSrcIsAccessible": {
    "selector": "frame",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The source for each frame is accessible content."
    },
    "description": {
      "en": "Each frame should contain accessible content, and contain content accessible to screen readers, like HTML as opposed to an image."
    }
  },
  "frameTitlesDescribeFunction": {
    "attribute": "title",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "frame[title]",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 0,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "2.4.1": {
          "techniques": [
            "H64"
          ]
        }
      }
    },
    "title": {
      "en": "All \"frame\" elemetns should have a \"title\" attribute that describes the purpose of the frame"
    },
    "description": {
      "en": "Each <code>frame</code> elements should have a \"title\" attribute which describes the purpose or function of the frame."
    }
  },
  "frameTitlesNotEmpty": {
    "selector": "frame:not(frame[title]), frame[title=''], iframe:not(iframe[title]), iframe[title='']",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.4.1": {
          "techniques": [
            "H64"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H64"
          ]
        }
      }
    },
    "title": {
      "en": "Frames cannot have empty \"title\" attributes"
    },
    "description": {
      "en": "All <code>frame</code> elements must have a valid \"title\" attribute."
    }
  },
  "frameTitlesNotPlaceholder": {
    "attribute": "title",
    "components": [
      "placeholder"
    ],
    "selector": "frame, iframe",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "2.4.1": {
          "techniques": [
            "H64"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H64"
          ]
        }
      }
    },
    "title": {
      "en": "Frames cannot have \"title\" attributes that are just placeholder text"
    },
    "description": {
      "en": "Frame \"title\" attributes should not be simple placeholder text like \"frame"
    }
  },
  "framesHaveATitle": {
    "selector": "frame:not(frame[title]), iframe:not(iframe[title])",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.4.1": {
          "techniques": [
            "H64"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H64"
          ]
        }
      }
    },
    "title": {
      "en": "All \"frame\" elements should have a \"title\" attribute"
    },
    "description": {
      "en": "Each <code>frame</code> elements should have a \"title\" attribute."
    }
  },
  "framesetIsNotUsed": {
    "selector": "frameset",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The \"frameset\" element should not be used"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "framesetMustHaveNoFramesSection": {
    "selector": "frameset:not(frameset:has(noframes))",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All framesets should contain a noframes section"
    },
    "description": {
      "en": "If a <code>frameset</code> contains three or more frames, use a \"longdesc\" attribute to help describe the purpose of the frames."
    }
  },
  "headerH1": {
    "components": [
      "header"
    ],
    "selector": "h1",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "header",
    "guidelines": {
      "wcag": {
        "2.4.6": {
          "techniques": [
            "G130"
          ]
        }
      }
    },
    "title": {
      "en": "The header following an h1 is h1 or h2"
    },
    "description": {
      "en": "The header following an <code>h1</code> element should either be an <code>h2</code> or another <code>h1</code>. "
    }
  },
  "headerH1Format": {
    "components": [
      "header"
    ],
    "selector": "h1",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "T3"
          ]
        }
      }
    },
    "title": {
      "en": "All h1 elements are not used for formatting"
    },
    "description": {
      "en": "An <code>h1</code> element may not be used purely for formatting."
    }
  },
  "headerH2": {
    "components": [
      "header"
    ],
    "selector": "h2",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "header",
    "guidelines": {
      "wcag": {
        "2.4.6": {
          "techniques": [
            "G130"
          ]
        }
      }
    },
    "title": {
      "en": "The header following an h2 is h1, h2 or h3"
    },
    "description": {
      "en": "The header following an <code>h2</code> element should either be an <code>h3</code>,  <code>h1</code> or another <code>h2</code>. "
    }
  },
  "headerH2Format": {
    "components": [
      "header"
    ],
    "selector": "h2",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "T3"
          ]
        }
      }
    },
    "title": {
      "en": "All h2 elements are not used for formatting"
    },
    "description": {
      "en": "An <code>h2</code> element may not be used purely for formatting."
    }
  },
  "headerH3": {
    "components": [
      "header"
    ],
    "selector": "h3",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "header",
    "guidelines": {
      "wcag": {
        "2.4.6": {
          "techniques": [
            "G130"
          ]
        }
      }
    },
    "title": {
      "en": "The header following an h3 is h1, h2, h3 or h4"
    },
    "description": {
      "en": "The header following an <code>h3</code> element should either be an <code>h4</code>,  <code>h2</code>,  <code>h1</code> or another <code>h3</code>. "
    }
  },
  "headerH3Format": {
    "components": [
      "header"
    ],
    "selector": "h3",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "T3"
          ]
        }
      }
    },
    "title": {
      "en": "All h3 elements are not used for formatting"
    },
    "description": {
      "en": "An <code>h3</code> element may not be used purely for formatting."
    }
  },
  "headerH4": {
    "components": [
      "header"
    ],
    "selector": "h4",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "header",
    "guidelines": {
      "wcag": {
        "2.4.6": {
          "techniques": [
            "G130"
          ]
        }
      }
    },
    "title": {
      "en": "The header following an h4 is h1, h2, h3, h4 or h5"
    },
    "description": {
      "en": "The header following an <code>h4</code> element should either be an <code>h5</code>,  <code>h3</code>,  <code>h2</code>,  <code>h1</code>,  or another <code>h4</code>. "
    }
  },
  "headerH4Format": {
    "components": [
      "header"
    ],
    "selector": "h4",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "T3"
          ]
        }
      }
    },
    "title": {
      "en": "All h4 elements are not used for formatting"
    },
    "description": {
      "en": "An <code>h4</code> element may not be used purely for formatting."
    }
  },
  "headerH5": {
    "components": [
      "header"
    ],
    "selector": "h5",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "header",
    "guidelines": {
      "wcag": {
        "2.4.6": {
          "techniques": [
            "G130"
          ]
        }
      }
    },
    "title": {
      "en": "The header following an h5 is h6 or any header less than h6"
    },
    "description": {
      "en": "The header following an <code>h5</code> element should either be an <code>h6</code>,   <code>h3</code>,  <code>h2</code>,  <code>h1</code>,  or another <code>h5</code>. "
    }
  },
  "headerH5Format": {
    "selector": "h5",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "T3"
          ]
        }
      }
    },
    "title": {
      "en": "All h5 elements are not used for formatting"
    },
    "description": {
      "en": "An <code>h5</code> element may not be used purely for formatting."
    }
  },
  "headerH6Format": {
    "selector": "h6",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "T3"
          ]
        }
      }
    },
    "title": {
      "en": "All h6 elements are not used for formatting"
    },
    "description": {
      "en": "An <code>h6</code> element may not be used purely for formatting."
    }
  },
  "headersHaveText": {
    "components": [
      "placeholder"
    ],
    "content": true,
    "empty": true,
    "selector": "h1, h2, h3, h4, h5, h6",
    "tags": [
      "header",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "G141"
          ]
        },
        "2.4.10": {
          "techniques": [
            "G141"
          ]
        }
      }
    },
    "title": {
      "en": "All headers should contain readable text"
    },
    "description": {
      "en": "Users with screen readers use headings like the tabs <em>h1</em> to navigate the structure of a page. All headings should contain either text, or images with appropriate <em>alt</em> attributes."
    }
  },
  "headersUseToMarkSections": {
    "callback": "headersUseToMarkSections",
    "tags": [
      "header",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "G141"
          ]
        },
        "2.4.10": {
          "techniques": [
            "G141"
          ]
        }
      }
    },
    "title": {
      "en": "Use headers to mark the beginning of each section"
    },
    "description": {
      "en": "Check that each logical section of the page is broken or introduced with a header (<code></code>. h1-h6>) element."
    }
  },
  "iIsNotUsed": {
    "selector": "i",
    "tags": [
      "deprecated",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The \"i\" (italic) element is not used"
    },
    "description": {
      "en": "The <code>i</code> (italic) element provides no emphasis for non-sighted readers. Use the <code>em</code> tag instead."
    }
  },
  "iframeMustNotHaveLongdesc": {
    "selector": "iframe[longdesc]",
    "tags": [
      "objects",
      "iframe",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Inline frames (\"iframes\") should not have a \"longdesc\" attribute"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "imageMapServerSide": {
    "selector": "img[ismap]",
    "tags": [
      "objects",
      "iframe",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All links in a server-side map should have duplicate links available in the document"
    },
    "description": {
      "en": "Any image with an \"usemap\" attribute for a server-side image map should have the available links duplicated elsewhere."
    }
  },
  "imgAltEmptyForDecorativeImages": {
    "selector": "img[alt]",
    "tags": [
      "image",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.3": {
          "techniques": [
            "F26"
          ]
        }
      }
    },
    "title": {
      "en": "If an image is purely decorative, the \"alt\" text must be empty"
    },
    "description": {
      "en": "Any image that is only decorative (serves no function or adds to the purpose of the page content) should have an \"alt\" attribute"
    }
  },
  "imgAltIdentifiesLinkDestination": {
    "selector": "a img[alt]:first",
    "tags": [
      "image",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Any image within a link must have \"alt\" text the describes the link destination"
    },
    "description": {
      "en": "Any image that is within a link should have an \"alt\" attribute which identifies the destination or purpose of the link."
    }
  },
  "imgAltIsDifferent": {
    "callback": "imgAltIsDifferent",
    "tags": [
      "image",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H37"
          ]
        }
      }
    },
    "title": {
      "en": "Image \"alt\" attributes should not be the same as the filename"
    },
    "description": {
      "en": "All <code>img</code> elements should have an \"alt\" attribute that is not just the name of the file"
    }
  },
  "imgAltIsSameInText": {
    "selector": "img",
    "tags": [
      "image",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "G74",
            "H37"
          ]
        }
      }
    },
    "title": {
      "en": "Check that any text within an image is also in the \"alt\" attribute"
    },
    "description": {
      "en": "If an image has text within it, that text should be repeated in the \"alt\" attribute"
    }
  },
  "imgAltIsTooLong": {
    "callback": "imgAltIsTooLong",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H37"
          ]
        }
      }
    },
    "title": {
      "en": "Image Alt text is short"
    },
    "description": {
      "en": "All \"alt\" attributes for <code>img</code> elements should be clear and concise. \"Alt\" attributes over 100 characters long should be reviewed to see if they are too long."
    }
  },
  "imgAltNotEmptyInAnchor": {
    "callback": "imgAltNotEmptyInAnchor",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "2.4.4": {
          "techniques": [
            "H30"
          ]
        }
      }
    },
    "title": {
      "en": "An image within a link cannot have an empty \"alt\" attribute if there is no other text within the link"
    },
    "description": {
      "en": "Any image that is within a link (an <code>a</code> element) that has no other text cannot have an empty or missing \"alt\" attribute."
    }
  },
  "imgAltNotPlaceHolder": {
    "attribute": "alt",
    "components": [
      "placeholder"
    ],
    "selector": "img",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "F30",
            "F39"
          ]
        },
        "1.2.1": {
          "techniques": [
            "F30"
          ]
        }
      }
    },
    "title": {
      "en": "Images should not have a simple placeholder text as an \"alt\" attribute"
    },
    "description": {
      "en": "Any image that is not used decorativey or which is purely for layout purposes cannot have an \"alt\" attribute that consists solely of placeholders."
    }
  },
  "imgAltTextNotRedundant": {
    "callback": "imgAltTextNotRedundant",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Unless the image files are the same, no image should contain redundant alt text"
    },
    "description": {
      "en": "Every distinct image on a page should have it's own <em>alt</em> text which is different than all the others on the page to avoid redundancy and confusion."
    }
  },
  "imgGifNoFlicker": {
    "callback": "imgGifNoFlicker",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "508": [
        "j"
      ],
      "wcag": {
        "2.2.2": {
          "techniques": [
            "G152"
          ]
        }
      }
    },
    "title": {
      "en": "Any animated GIF should not flicker"
    },
    "description": {
      "en": "Animated GIF files should not flicker with a frequency over 2 Hz and lower than 55 Hz. You can check the flicker rate of this GIF <a href=\"http://tools.webaccessibile.org/test/check.aspx\">using an online tool</a>."
    }
  },
  "imgHasAlt": {
    "selector": "img:not(img[alt])",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "F65",
            "H37"
          ]
        }
      }
    },
    "title": {
      "en": "Image elements must have an \"alt\" attribute"
    },
    "description": {
      "en": "All <code>img</code> elements must have an alt attribute"
    }
  },
  "imgHasLongDesc": {
    "callback": "imgHasLongDesc",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "2.4.4": {
          "techniques": [
            "G91"
          ]
        },
        "2.4.9": {
          "techniques": [
            "G91"
          ]
        }
      }
    },
    "title": {
      "en": "A \"longdesc\" attribute is required for any image where additional information not in the \"alt\" attribute is required"
    },
    "description": {
      "en": "Any image that has an \"alt\" attribute that does not fully convey the meaning of the image must have a \"longdesc\" attribute."
    }
  },
  "imgImportantNoSpacerAlt": {
    "callback": "imgImportantNoSpacerAlt",
    "tags": [
      "image",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Images that are important should not have a purely white-space \"alt\" attribute"
    },
    "description": {
      "en": "Any image that is not used decorativey or which is purely for layout purposes cannot have an \"alt\" attribute that consists solely of white space (i.e. a space"
    }
  },
  "imgMapAreasHaveDuplicateLink": {
    "callback": "imgMapAreasHaveDuplicateLink",
    "tags": [
      "image",
      "imagemap"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "508": [
        "ef",
        "ef"
      ]
    },
    "title": {
      "en": "All links within a client-side image are duplicated elsewhere in the document"
    },
    "description": {
      "en": "Any image that has a \"usemap\" attribute must have links replicated somewhere else in the document."
    }
  },
  "imgNonDecorativeHasAlt": {
    "callback": "imgNonDecorativeHasAlt",
    "tags": [
      "image",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "F38"
          ]
        }
      }
    },
    "title": {
      "en": "Any non-decorative images should have a non-empty \"alt\" attribute"
    },
    "description": {
      "en": "Any image that is not used decorativey or which is purely for layout purposes cannot have an empty \"alt\" attribute."
    }
  },
  "imgNotReferredToByColorAlone": {
    "selector": "img",
    "tags": [
      "image",
      "color",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "c"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "F13"
          ]
        },
        "1.4.1": {
          "techniques": [
            "F13"
          ]
        }
      }
    },
    "title": {
      "en": "For any image, the \"alt\" text cannot refer to color alone"
    },
    "description": {
      "en": "The \"alt\" text or content text for any image should not refer to the image by color alone. This is often fixed by changing the \"alt\" text to the meaning of the image"
    }
  },
  "imgServerSideMapNotUsed": {
    "selector": "img[ismap]",
    "tags": [
      "image",
      "imagemap",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Server-side image maps should not be used"
    },
    "description": {
      "en": "Server-side image maps should not be used."
    }
  },
  "imgShouldNotHaveTitle": {
    "selector": "img[title]",
    "tags": [
      "image",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Images should not have a \"title\" attribute"
    },
    "description": {
      "en": "Images should not contain a \"title\" attribute."
    }
  },
  "imgWithMapHasUseMap": {
    "selector": "img[ismap]:not(img[usemap])",
    "tags": [
      "image",
      "imagemap",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "508": [
        "ef",
        "ef"
      ]
    },
    "title": {
      "en": "Any image with an \"ismap\" attribute have a valid \"usemap\" attribute"
    },
    "description": {
      "en": "If an image has an \"ismap\" attribute"
    }
  },
  "imgWithMathShouldHaveMathEquivalent": {
    "callback": "imgWithMathShouldHaveMathEquivalent",
    "tags": [
      "image",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Images which contain math equations should provide equivalent MathML"
    },
    "description": {
      "en": "Images which contain math equations should be accompanied or link to a document with the equivalent equation marked up with <a href=\"http://www.w3.org/Math/\">MathML</a>."
    }
  },
  "inputCheckboxHasTabIndex": {
    "attribute": "tabindex",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=checkbox]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All \"checkbox\" input elements require a valid \"tabindex\" attribute"
    },
    "description": {
      "en": "All <code>input</code> elements of type \"checkbox\" should have a \"tabindex\" attribute to help navigate the form with a keyboard alone."
    }
  },
  "inputCheckboxRequiresFieldset": {
    "callback": "inputCheckboxRequiresFieldset",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "3.3.2": {
          "techniques": [
            "H71"
          ]
        }
      }
    },
    "title": {
      "en": "Logical groups of check boxes should be grouped with a \"fieldset"
    },
    "description": {
      "en": "Related \"checkbox\" input fields should be grouped together using a <code>fieldset</code>."
    }
  },
  "inputDoesNotUseColorAlone": {
    "selector": "input:not(input[type=hidden])",
    "tags": [
      "form",
      "color",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "c"
      ]
    },
    "title": {
      "en": "An \"input\" element should not use color alone"
    },
    "description": {
      "en": "All input elements should not refer to content by color alone."
    }
  },
  "inputElementsDontHaveAlt": {
    "selector": "input[type!=image][alt]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Input elements which are not images should not have an \"alt\" attribute"
    },
    "description": {
      "en": "Because of inconsistencies in how user agents use the \"alt\" attribute"
    }
  },
  "inputFileHasTabIndex": {
    "attribute": "tabindex",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=file]",
    "tags": [
      "form",
      "tabindex"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All \"file\" input elements require a valid \"tabindex\" attribute"
    },
    "description": {
      "en": "All <code>input</code> elements of type \"file\" should have a \"tabindex\" attribute to help navigate the form with a keyboard alone."
    }
  },
  "inputImageAltIdentifiesPurpose": {
    "selector": "input[type=image][alt]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H36"
          ]
        }
      }
    },
    "title": {
      "en": "All \"input\" elements with a type of \"image\" must have an \"alt\" attribute that describes the function of the input"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"image\" should have an \"alt\" attribute"
    }
  },
  "inputImageAltIsNotFileName": {
    "callback": "inputImageAltIsNotFileName",
    "tags": [
      "form",
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H36"
          ]
        }
      }
    },
    "title": {
      "en": "All \"input\" elements with a type of \"image\" must have an \"alt\" attribute which is not the same as the filename"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"image\" should have an \"alt\" attribute"
    }
  },
  "inputImageAltIsNotPlaceholder": {
    "attribute": "alt",
    "components": [
      "placeholder"
    ],
    "selector": "input[type=image]",
    "tags": [
      "form",
      "image",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H36"
          ]
        }
      }
    },
    "title": {
      "en": "All \"input\" elements with a type of \"image\" must have an \"alt\" attribute which is not placeholder text"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"image\" should have an \"alt\" attribute"
    }
  },
  "inputImageAltIsShort": {
    "callback": "inputImageAltIsShort",
    "tags": [
      "form",
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H36"
          ]
        }
      }
    },
    "title": {
      "en": "All \"input\" elements with a type of \"image\" must have an \"alt\" attribute which is as short as possible"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"image\" should have an \"alt\" attribute"
    }
  },
  "inputImageAltNotRedundant": {
    "callback": "inputImageAltNotRedundant",
    "strings": "redundant.inputImage",
    "tags": [
      "form",
      "image",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H36"
          ]
        }
      }
    },
    "title": {
      "en": "The \"alt\" text for input \"image\" submit buttons must not be filler text"
    },
    "description": {
      "en": "Every form image button should not simply use filler text like \"button\" or \"submit\" as the \"alt\" text."
    }
  },
  "inputImageHasAlt": {
    "selector": "input[type=image]:not(input[type=image][alt])",
    "tags": [
      "form",
      "image",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "508": [
        "a"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "F65",
            "G94",
            "H36"
          ]
        }
      }
    },
    "title": {
      "en": "All \"input\" elements with a type of \"image\" must have an \"alt\" attribute"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"image\" should have an \"alt\" attribute."
    }
  },
  "inputImageNotDecorative": {
    "selector": "input[type=image]",
    "tags": [
      "form",
      "image",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H36"
          ]
        }
      }
    },
    "title": {
      "en": "The \"alt\" text for input \"image\" buttons must be the same as text inside the image"
    },
    "description": {
      "en": "Every form image button which has text within the image (say, a picture of the word \"Search\" in a special font)"
    }
  },
  "inputPasswordHasTabIndex": {
    "attribute": "tabindex",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=password]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All \"password\" input elements require a valid \"tabindex\" attribute"
    },
    "description": {
      "en": "All <code>input</code> elements of type \"password\" should have a \"tabindex\" attribute to help navigate the form with a keyboard alone."
    }
  },
  "inputRadioHasTabIndex": {
    "attribute": "tabindex",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=radio]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All \"radio\" input elements require a valid \"tabindex\" attribute"
    },
    "description": {
      "en": "All <code>input</code> elements of type \"radio\" should have a \"tabindex\" attribute to help navigate the form with a keyboard alone."
    }
  },
  "inputSubmitHasTabIndex": {
    "attribute": "tabindex",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=submit]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All input elements, type of \"submit\" have a valid tab index."
    },
    "description": {
      "en": ""
    }
  },
  "inputTextHasLabel": {
    "selector": "input[type=text]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "label",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "All \"input\" elements should have a corresponding \"label"
    },
    "description": {
      "en": "All <code>input</code> elements should have a corresponding <code>label</code> element. Screen readers often enter a \"form mode\" where only label text is read aloud to the user"
    }
  },
  "inputTextHasTabIndex": {
    "attribute": "tabindex",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=text]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All \"text\" input elements require a valid \"tabindex\" attribute"
    },
    "description": {
      "en": "All <code>input</code> elements of type \"text\" should have a \"tabindex\" attribute to help navigate the form with a keyboard alone."
    }
  },
  "inputTextHasValue": {
    "attribute": "value",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=text]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All \"input\" elements of type \"text\" must have a default text"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"text\" should have a default text."
    }
  },
  "inputTextValueNotEmpty": {
    "attribute": "value",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "input[type=text]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "Text\" input elements require a non-whitespace default text"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"text\" should have a default text which is not empty."
    }
  },
  "labelDoesNotContainInput": {
    "selector": "label:has(input)",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Label elements should not contain an input element"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "labelMustBeUnique": {
    "callback": "labelMustBeUnique",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F17"
          ]
        },
        "4.1.1": {
          "techniques": [
            "F17"
          ]
        }
      }
    },
    "title": {
      "en": "Every form input must have only one label"
    },
    "description": {
      "en": "Each form input should have only one <code>label</code> element."
    }
  },
  "labelMustNotBeEmpty": {
    "components": [
      "placeholder"
    ],
    "content": true,
    "empty": true,
    "selector": "label",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "Labels must contain text"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "labelsAreAssignedToAnInput": {
    "callback": "labelsAreAssignedToAnInput",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "All labels should be associated with an input"
    },
    "description": {
      "en": "All <code>label</code> elements should be assigned to an input item, and should have a <em>for</em> attribute which equals the <em>id</em> attribute of a form element."
    }
  },
  "legendDescribesListOfChoices": {
    "selector": "legend",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "2.4.6": {
          "techniques": [
            "G131"
          ]
        }
      }
    },
    "title": {
      "en": "All \"legend\" elements must describe the group of choices"
    },
    "description": {
      "en": "If a <code>legend</code> element is used in a fieldset, the <code>legend</code> content must describe the group of choices."
    }
  },
  "legendTextNotEmpty": {
    "selector": "legend:empty",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H71"
          ]
        },
        "2.4.6": {
          "techniques": [
            "G131"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H71"
          ]
        }
      }
    },
    "title": {
      "en": "Legend text must not contain just whitespace"
    },
    "description": {
      "en": "If a <code>legend</code> element is used in a fieldset, the <code>legend</code> should not contain empty text."
    }
  },
  "legendTextNotPlaceholder": {
    "components": [
      "placeholder"
    ],
    "content": true,
    "emtpy": true,
    "selector": "legend",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H71"
          ]
        },
        "2.4.6": {
          "techniques": [
            "G131"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H71"
          ]
        }
      }
    },
    "title": {
      "en": "Legend\" text must not contain placeholder text like \"form\" or \"field"
    },
    "description": {
      "en": "If a <code>legend</code> element is used in a fieldset, the <code>legend</code> should not contain useless placeholder text."
    }
  },
  "liDontUseImageForBullet": {
    "selector": "li:has(img)",
    "tags": [
      "list",
      "content"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": []
  },
  "linkUsedForAlternateContent": {
    "selector": "html:not(html:has(link[rel=alternate])) body",
    "tags": [
      "document"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Use a \"link\" element for alternate content"
    },
    "description": {
      "en": "Documents which contain things like videos, sound, or other forms of media that are not accessible, should provide a <code>link</code> element with a \"rel\" attribute of \"alternate\" in the document header."
    }
  },
  "linkUsedToDescribeNavigation": {
    "selector": "html:not(html:has(link[rel=index]))",
    "tags": [
      "document"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Document uses link element to describe navigation if it is within a collection."
    },
    "description": {
      "en": "The link element can provide metadata about the position of an HTML page within a set of Web units or can assist in locating content with a set of Web units."
    }
  },
  "listNotUsedForFormatting": {
    "callback": "listNotUsedForFormatting",
    "tags": [
      "list",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.2": {
          "techniques": [
            "F1"
          ]
        }
      }
    },
    "title": {
      "en": "Lists should not be used for formatting"
    },
    "description": {
      "en": "Lists like <code>ul</code> and <code>ol</code> are to provide a structured list, and should not be used to format text. This test views any list with just one item as suspicious, but should be manually reviewed."
    }
  },
  "marqueeIsNotUsed": {
    "selector": "marquee",
    "tags": [
      "deprecated",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "The \"marquee\" tag should not be used"
    },
    "description": {
      "en": "The <code>marquee</code> element is difficult for users to read and is not a standard HTML element. Try to find another way to convey the importance of this text."
    }
  },
  "menuNotUsedToFormatText": {
    "selector": "menu:not(menu li:parent(menu))",
    "tags": [
      "list",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Menu elements should not be used for formattin"
    },
    "description": {
      "en": "Menu is a deprecated tag, but is still honored in a transitional DTD. Menu tags are to provide structure for a document and should not be used for formatting. If a menu tag is to be used, it should only contain an ordered or unordered list of links."
    }
  },
  "noembedHasEquivalentContent": {
    "selector": "noembed",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Noembed elements must be the same content as their \"embed\" element"
    },
    "description": {
      "en": "All <code>noembed</code> elements must contain or link to an accessible version of their <code>embed</code> counterparts."
    }
  },
  "noframesSectionMustHaveTextEquivalent": {
    "selector": "frameset:not(frameset:has(noframes))",
    "tags": [
      "deprecated",
      "frame"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All \"noframes\" elements should contain the text content from all frames"
    },
    "description": {
      "en": "The <code>noframes</code> content should either replicate or link to the content visible within the frames."
    }
  },
  "objectContentUsableWhenDisabled": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "When objects are disabled, content should still be available"
    },
    "description": {
      "en": "The content within objects should still be available, even if the object is disabled. To do this, place a link to the direct object source within the <code>object</code> tag."
    }
  },
  "objectDoesNotFlicker": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "j"
      ],
      "wcag": {
        "2.2.2": {
          "techniques": [
            "F7"
          ]
        }
      }
    },
    "title": {
      "en": "Objects do not flicker"
    },
    "description": {
      "en": "The content within an <code>object</code> tag must not flicker."
    }
  },
  "objectDoesNotUseColorAlone": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "c"
      ]
    },
    "title": {
      "en": "Objects must not use color to communicate alone"
    },
    "description": {
      "en": "Objects should contain content that makes sense without color and is accessible to users who are color blind."
    }
  },
  "objectInterfaceIsAccessible": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Interfaces within objects must be accessible"
    },
    "description": {
      "en": "Object content should be assessed for accessibility."
    }
  },
  "objectLinkToMultimediaHasTextTranscript": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Objects which reference multimedia files should also provide a link to a transcript"
    },
    "description": {
      "en": "If an object contains a video, a link to the transcript should be provided near the object."
    }
  },
  "objectMustContainText": {
    "components": [
      "placeholder"
    ],
    "content": true,
    "empty": true,
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "FLASH1",
            "H27"
          ]
        }
      }
    },
    "title": {
      "en": "Objects must contain their text equivalents"
    },
    "description": {
      "en": "All <code>object</code> elements should contain a text equivalent if the object cannot be rendered."
    }
  },
  "objectMustHaveEmbed": {
    "selector": "object:not(object:has(embed))",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Every object should contain an \"embed\" element"
    },
    "description": {
      "en": "Every <code>object</code> element must also contain an <code>embed</code> element."
    }
  },
  "objectMustHaveTitle": {
    "selector": "object:not(object[title])",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H27"
          ]
        }
      }
    },
    "title": {
      "en": "Objects should have a title attribute"
    },
    "description": {
      "en": "All <code>object</code> elements should contain a \"title\" attribute."
    }
  },
  "objectMustHaveValidTitle": {
    "attribute": "title",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 1,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "Objects must not have an empty title attribute"
    },
    "description": {
      "en": "All <code>object</code> elements should have a \"title\" attribute which is not empty."
    }
  },
  "objectProvidesMechanismToReturnToParent": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All objects should provide a way for keyboard users to escape"
    },
    "description": {
      "en": "Ensure that a user who has only a keyboard as an input device can escape a <code>object</code> element. This requires manual confirmation."
    }
  },
  "objectShouldHaveLongDescription": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "An object might require a long description"
    },
    "description": {
      "en": "Objects might require a long description, especially if their content is complicated."
    }
  },
  "objectTextUpdatesWhenObjectChanges": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "a"
      ]
    },
    "title": {
      "en": "The text equivalents of an object should update if the object changes"
    },
    "description": {
      "en": "If an object changes, the text equivalent of that object should also change."
    }
  },
  "objectUIMustBeAccessible": {
    "selector": "object",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Content within an \"object\" element should be usable with objects disabled"
    },
    "description": {
      "en": "Objects who's content changes using java, ActiveX, or other similar technologies, should have their default text change when the object's content changes."
    }
  },
  "objectWithClassIDHasNoText": {
    "selector": "object[classid]:not(object[classid]:empty)",
    "tags": [
      "objects",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Objects with \"classid\" attributes should change their text if the content of the object changes"
    },
    "description": {
      "en": "Objects who's content changes using java, ActiveX, or other similar technologies, should have their default text change when the object's content changes."
    }
  },
  "pNotUsedAsHeader": {
    "callback": "pNotUsedAsHeader",
    "tags": [
      "header",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "G141",
            "H42"
          ]
        },
        "2.4.10": {
          "techniques": [
            "G141"
          ]
        }
      }
    },
    "title": {
      "en": "Paragraphs must not be used for headers"
    },
    "description": {
      "en": "Headers like <code>h1</code>. h6 are extremely useful for non-sighted users to navigate the structure of the page, and formatting a paragraph to just be big or bold, while it might visually look like a header, does not make it one."
    }
  },
  "paragarphIsWrittenClearly": {
    "callback": "paragarphIsWrittenClearly",
    "components": [
      "textStatistics"
    ],
    "tags": [
      "language",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "3.1.5": {
          "techniques": [
            "G86"
          ]
        }
      }
    }
  },
  "passwordHasLabel": {
    "components": [
      "label"
    ],
    "selector": "input[type=password]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "label",
    "guidelines": {
      "508": [
        "n"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "All password input elements should have a corresponding label"
    },
    "description": {
      "en": "All <code>input</code> elements with a type of \"password\"should have a corresponding <code>label</code> element. Screen readers often enter a \"form mode\" where only label text is read aloud to the user"
    }
  },
  "passwordLabelIsNearby": {
    "components": [
      "labelProximity"
    ],
    "selector": "input[type=password]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0.5,
    "type": "labelProximity",
    "guidelines": [],
    "title": {
      "en": "All \"password\" input elements have a label that is close"
    },
    "description": {
      "en": "All input elements of type \"password\" must have a corresponding label that is close to the form element. Users of screen magnification or with reduced spatial skills are hampered in using a form element if the label for that element is located far away."
    }
  },
  "preShouldNotBeUsedForTabularLayout": {
    "callback": "preShouldNotBeUsedForTabularLayout",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F33",
            "F34",
            "F48"
          ]
        },
        "1.3.2": {
          "techniques": [
            "F33",
            "F34"
          ]
        }
      }
    },
    "title": {
      "en": "Pre\" elements should not be used for tabular data"
    },
    "description": {
      "en": "If a <code>pre</code> element is used for tabular data, change the data to use a well-formed table."
    }
  },
  "radioHasLabel": {
    "components": [
      "label"
    ],
    "selector": "input[type=radio]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "label",
    "guidelines": {
      "508": [
        "n"
      ],
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "All \"radio\" input elements have a corresponding label"
    },
    "description": {
      "en": "All <code>input</code> elements of type \"radio\" should have a corresponding <code>label</code> element. Screen readers often enter a \"form mode\" where only label text is read aloud to the user"
    }
  },
  "radioLabelIsNearby": {
    "components": [
      "labelProximity"
    ],
    "selector": "input[type=radio]",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0.5,
    "type": "labelProximity",
    "guidelines": [],
    "title": {
      "en": "All \"radio\" input elements have a label that is close"
    },
    "description": {
      "en": "All input elements of type \"radio\" must have a corresponding label that is close to the form element. Users of screen magnification or with reduced spatial skills are hampered in using a form element if the label for that element is located far away."
    }
  },
  "radioMarkedWithFieldgroupAndLegend": {
    "selector": "input[type=radio]:not(fieldset input[type=radio])",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H71"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H71"
          ]
        }
      }
    },
    "title": {
      "en": "All radio button groups are marked using fieldset and legend elements."
    },
    "description": {
      "en": "form element content must contain both fieldset and legend elements if there are related radio buttons."
    }
  },
  "scriptContentAccessibleWithScriptsTurnedOff": {
    "selector": "script",
    "tags": [
      "javascript"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Content on the page should still be available if scripts are disabled"
    },
    "description": {
      "en": "All scripts should be assessed to see if, when the user is browing with scrips turned off, the page content is still available."
    }
  },
  "scriptInBodyMustHaveNoscript": {
    "selector": "html:not(html:has(noscript)):has(script) body",
    "tags": [
      "javascript"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "508": [
        "l"
      ]
    },
    "title": {
      "en": "Scripts should have a corresponding \"noscript\" element"
    },
    "description": {
      "en": "Scripts should be followed by a <code>noscripts</code> element to guide the user to content in an alternative way."
    }
  },
  "scriptOnclickRequiresOnKeypress": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "correspondingEvent": "onkeypress",
    "searchEvent": "onclick",
    "tags": [
      "javascript"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": {
      "508": [
        "l"
      ],
      "wcag": {
        "2.1.1": {
          "techniques": [
            "G90",
            "SCR2"
          ]
        },
        "2.1.3": {
          "techniques": [
            "G90"
          ]
        }
      }
    },
    "title": {
      "en": "If an element has an \"onclick\" attribute"
    },
    "description": {
      "en": "it should also have an \"onkeypress\" attribute"
    }
  },
  "scriptOndblclickRequiresOnKeypress": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "correspondingEvent": "onkeypress",
    "searchEvent": "ondblclick",
    "tags": [
      "javascript"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": {
      "508": [
        "l"
      ],
      "wcag": {
        "2.1.1": {
          "techniques": [
            "G90",
            "SCR2"
          ]
        },
        "2.1.3": {
          "techniques": [
            "G90"
          ]
        }
      }
    },
    "title": {
      "en": "Any element with an \"ondblclick\" attribute shoul have a keyboard-related action as well"
    },
    "description": {
      "en": "If an element has an \"ondblclick\" attribute"
    }
  },
  "scriptOnmousedownRequiresOnKeypress": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "correspondingEvent": "onkeydown",
    "searchEvent": "onmousedown",
    "tags": [
      "javascript"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": {
      "508": [
        "l"
      ],
      "wcag": {
        "2.1.1": {
          "techniques": [
            "G90",
            "SCR2"
          ]
        },
        "2.1.3": {
          "techniques": [
            "G90"
          ]
        }
      }
    },
    "title": {
      "en": "If an element has a \"mousedown\" attribute"
    },
    "description": {
      "en": "it should also have an \"onkeydown\" attribute"
    }
  },
  "scriptOnmousemove": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "correspondingEvent": "onkeypress",
    "searchEvent": "onmousemove",
    "tags": [
      "javascript"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": {
      "508": [
        "l"
      ],
      "wcag": {
        "2.1.1": {
          "techniques": [
            "SCR2"
          ]
        }
      }
    },
    "title": {
      "en": "Any element with an \"onmousemove\" attribute shoul have a keyboard-related action as well"
    },
    "description": {
      "en": "If an element has an \"onmousemove\" attribute"
    }
  },
  "scriptOnmouseoutHasOnmouseblur": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "correspondingEvent": "onblur",
    "searchEvent": "onmouseout",
    "tags": [
      "javascript"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": {
      "508": [
        "l"
      ],
      "wcag": {
        "2.1.1": {
          "techniques": [
            "SCR2"
          ]
        }
      }
    },
    "title": {
      "en": "If an element has a \"onmouseout\" attribute"
    },
    "description": {
      "en": "it should also have an \"onblur\" attribute"
    }
  },
  "scriptOnmouseoverHasOnfocus": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "correspondingEvent": "onfocus",
    "searchEvent": "onmouseover",
    "tags": [
      "javascript"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": {
      "508": [
        "l"
      ],
      "wcag": {
        "2.1.1": {
          "techniques": [
            "SCR2"
          ]
        }
      }
    },
    "title": {
      "en": "If an element has an \"onmouseover\" attribute"
    },
    "description": {
      "en": "it should also have an \"onfocus\" attribute"
    }
  },
  "scriptOnmouseupHasOnkeyup": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "correspondingEvent": "onkeyup",
    "searchEvent": "onmouseup",
    "tags": [
      "javascript"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": {
      "508": [
        "l"
      ],
      "wcag": {
        "2.1.1": {
          "techniques": [
            "G90"
          ]
        },
        "2.1.3": {
          "techniques": [
            "G90"
          ]
        }
      }
    },
    "title": {
      "en": "If an element has an \"onmouseup\" attribute"
    },
    "description": {
      "en": "it should also have an \"onkeyup\" attribute"
    }
  },
  "scriptUIMustBeAccessible": {
    "selector": "script",
    "tags": [
      "javascript"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "l"
      ]
    },
    "title": {
      "en": "The user interface for scripts should be accessible"
    },
    "description": {
      "en": "All scripts should be assessed to see if their interface is accessible."
    }
  },
  "scriptsDoNotFlicker": {
    "selector": "script",
    "tags": [
      "javascript"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "j"
      ],
      "wcag": {
        "2.2.2": {
          "techniques": [
            "F7"
          ]
        }
      }
    },
    "title": {
      "en": "Scripts should not cause the screen to flicker"
    },
    "description": {
      "en": "All scripts should be assessed to see if their interface does not flicker."
    }
  },
  "scriptsDoNotUseColorAlone": {
    "selector": "script",
    "tags": [
      "javascript",
      "color"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "508": [
        "c"
      ]
    },
    "title": {
      "en": "The interface in scripts should not use color alone"
    },
    "description": {
      "en": "All scripts should be assessed to see if their interface does not have an interface which requires distinguishing beteween colors alone."
    }
  },
  "selectDoesNotChangeContext": {
    "components": [
      "event",
      "hasEventListener"
    ],
    "searchEvent": "onchange",
    "selector": "select",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "event",
    "guidelines": [],
    "title": {
      "en": "Select\" elemetns must not contain an \"onchange\" attribute"
    },
    "description": {
      "en": "Actions like \"onchange\" can take control away from users who are trying to navigate the page. Using an \"onchange\" attribute for things like select-list menus should instead be replaced with a drop-down and a button which initiates the action."
    }
  },
  "selectHasAssociatedLabel": {
    "components": [
      "label"
    ],
    "selector": "select",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "label",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "All select elements have an explicitly associated label."
    },
    "description": {
      "en": "All <code>select</code> elements should have a corresponding <code>label</code> element. Screen readers often enter a \"form mode\" where only label text is read aloud to the user"
    }
  },
  "selectJumpMenu": {
    "callback": "selectJumpMenu",
    "components": [
      "hasEventListener"
    ],
    "tags": [
      "form",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "3.2.2": {
          "techniques": [
            "F37"
          ]
        },
        "3.2.5": {
          "techniques": [
            "F9"
          ]
        }
      }
    },
    "title": {
      "en": "Select jump menus should jump on button press, not on state change"
    },
    "description": {
      "en": "If you wish to use a 'Jump' menu with a select item that then redirects users to another page, the jump should occur on the user pressing a button, rather than on the change event of that select eleemnt."
    }
  },
  "selectWithOptionsHasOptgroup": {
    "selector": "select:not(select:has(optgroup)) option:nth-child(5)",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H85"
          ]
        }
      }
    },
    "title": {
      "en": "Form select elements should use optgroups for long selections"
    },
    "description": {
      "en": ".. code-block:: html"
    }
  },
  "siteMap": {
    "callback": "siteMap",
    "strings": "siteMap",
    "tags": [
      "document"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "2.4.5": {
          "techniques": [
            "G63"
          ]
        },
        "2.4.8": {
          "techniques": [
            "G63"
          ]
        }
      }
    },
    "title": {
      "en": "Websites must have a site map"
    },
    "description": {
      "en": "Every web site should have a page which provides a site map or another method to navigate most of the site from a single page to save time for users of assistive devices."
    }
  },
  "skipToContentLinkProvided": {
    "selector": "body:not(body:has(a:first[href^=#]))",
    "tags": [
      "document"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "508": [
        "o"
      ],
      "wcag": {
        "2.4.1": {
          "techniques": [
            "G1"
          ]
        }
      }
    },
    "title": {
      "en": "A \"skip to content\" link should exist as one of the first links on the page"
    },
    "description": {
      "en": "A link reading \"skip to content"
    }
  },
  "svgContainsTitle": {
    "selector": "svg:not(svg:has(title))",
    "tags": [
      "image",
      "svg",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "F65"
          ]
        }
      }
    },
    "title": {
      "en": "Inline SVG should use Title elements"
    },
    "description": {
      "en": "Any inline SVG image should have an embedded <code>title</code> element"
    }
  },
  "tabIndexFollowsLogicalOrder": {
    "callback": "tabIndexFollowsLogicalOrder",
    "tags": [
      "document"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "2.4.3": {
          "techniques": [
            "H4"
          ]
        }
      }
    },
    "title": {
      "en": "The tab order of a document is logical"
    },
    "description": {
      "en": "Check that the tab-order of a page is logical."
    }
  },
  "tableCaptionIdentifiesTable": {
    "selector": "caption",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H39"
          ]
        }
      }
    },
    "title": {
      "en": "Captions should identify their table"
    },
    "description": {
      "en": "Check to make sure that a table's caption identifies the table with a name, figure number, etc."
    }
  },
  "tableComplexHasSummary": {
    "selector": "table:not(table[summary], table:has(caption))",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H39"
          ]
        }
      }
    },
    "title": {
      "en": "Complex tables should have a summary"
    },
    "description": {
      "en": "If a table is complex (for example, has some cells with \"colspan\" attributes"
    }
  },
  "tableDataShouldHaveTh": {
    "selector": "table:not(table:has(th))",
    "tags": [
      "table",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "508": [
        "g"
      ],
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F91"
          ]
        }
      }
    },
    "title": {
      "en": "Data tables should contain \"th\" elements"
    },
    "description": {
      "en": "Tables which contain data (as opposed to layout tables) should contain <code>th</code> elements to mark headers for screen readers and enhance the structure of the document."
    }
  },
  "tableHeaderLabelMustBeTerse": {
    "callback": "tableHeaderLabelMustBeTerse",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Table header lables must be terse"
    },
    "description": {
      "en": "The \"abbr\" attribute for table headers must be terse (less than 20 characters long)."
    }
  },
  "tableIsGrouped": {
    "selector": "table:not(table:has(thead), table:has(tfoot))",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Mark up the areas of tables using thead and tbody"
    },
    "description": {
      "en": ""
    }
  },
  "tableLayoutDataShouldNotHaveTh": {
    "callback": "tableLayoutDataShouldNotHaveTh",
    "tags": [
      "table",
      "layout",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F46"
          ]
        }
      }
    },
    "title": {
      "en": "Layout tables should not contain \"th\" elements"
    },
    "description": {
      "en": "Tables which are used purely for layout (as opposed to data tables), <strong>should not</strong> contain <code>th</code> elements, which would make the table appear to be a data table."
    }
  },
  "tableLayoutHasNoCaption": {
    "callback": "tableLayoutHasNoCaption",
    "tags": [
      "table",
      "layout",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F46"
          ]
        }
      }
    },
    "title": {
      "en": "All tables used for layout have no \"caption\" element"
    },
    "description": {
      "en": "If a table contains no data, and is used simply for layout, then it should not contain a <code>caption</code> element."
    }
  },
  "tableLayoutHasNoSummary": {
    "callback": "tableLayoutHasNoSummary",
    "tags": [
      "table",
      "layout",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F46"
          ]
        }
      }
    },
    "title": {
      "en": "All tables used for layout have no summary or an empty summary"
    },
    "description": {
      "en": "If a table contains no data, and is used simply for layout, then it should not have a \"summary\" attribute"
    }
  },
  "tableLayoutMakesSenseLinearized": {
    "callback": "tableLayoutMakesSenseLinearized",
    "tags": [
      "table",
      "layout",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "All tables used for layout should make sense when removed"
    },
    "description": {
      "en": "If a <code>table</code> element is used for layout purposes only, then the content of the table should make sense if the table is linearized."
    }
  },
  "tableNotUsedForLayout": {
    "callback": "tableNotUsedForLayout",
    "tags": [
      "table",
      "layout"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.2": {
          "techniques": [
            "F49"
          ]
        }
      }
    }
  },
  "tableSummaryDescribesTable": {
    "selector": "table[summary]",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "Table summaries should describe the navigation and structure of the table"
    },
    "description": {
      "en": "Table <code>summary</code> elements should describe the navigation tools and structure of the table, as well as provide an overview of what the table describes."
    }
  },
  "tableSummaryDoesNotDuplicateCaption": {
    "callback": "tableSummaryDoesNotDuplicateCaption",
    "tags": [
      "table",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Table \"summary\" elements should not duplicate the \"caption\" element"
    },
    "description": {
      "en": "The summary and the caption must be different, as both provide different information. A <code>caption</code>. /code element identifies the table., while the \"summary\" attribute describes the table contents."
    }
  },
  "tableSummaryIsEmpty": {
    "attribute": "summary",
    "components": [
      "placeholder"
    ],
    "empty": true,
    "selector": "table[summary]",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "placeholder",
    "guidelines": [],
    "title": {
      "en": "All data tables should have a summary"
    },
    "description": {
      "en": "If a table contains data, it should have a \"summary\" attribute."
    }
  },
  "tableSummaryIsNotTooLong": {
    "callback": "tableSummaryIsNotTooLong",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": []
  },
  "tableSummaryIsSufficient": {
    "selector": "table[summary]",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0,
    "type": "selector",
    "guidelines": [],
    "title": {
      "en": "All data tables should have an adequate summary"
    },
    "description": {
      "en": "If a table contains data, it should have a \"summary\" attribute that completely communicates the function and use of the table."
    }
  },
  "tableUseColGroup": {
    "callback": "tableUseColGroup",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Group columns using \"colgroup\" or \"col\" elements"
    },
    "description": {
      "en": "To help complex table headers make sense, use <code>colgroup</code> or <code>col</code> to group them together."
    }
  },
  "tableUsesAbbreviationForHeader": {
    "callback": "tableUsesAbbreviationForHeader",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Table headers over 20 characters should provide an \"abbr\" attribute"
    },
    "description": {
      "en": "For long table headers, use an \"abbr\" attribute that is less than short (less than 20 characters long)."
    }
  },
  "tableUsesCaption": {
    "selector": "table:not(table:has(caption))",
    "tags": [
      "table",
      "content"
    ],
    "testability": 1,
    "type": "selector",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H39"
          ]
        }
      }
    },
    "title": {
      "en": "Data tables should contain a \"caption\" element if not described elsewhere"
    },
    "description": {
      "en": "Unless otherwise described in the document, tables should contain <code>caption</code> elements to describe the purpose of the table."
    }
  },
  "tableUsesScopeForRow": {
    "callback": "tableUsesScopeForRow",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "H63"
          ]
        }
      }
    },
    "title": {
      "en": "Data tables should use scoped headers for rows with headers"
    },
    "description": {
      "en": "Where there are table headers for both rows and columns, use the \"scope\" attribute to help relate those headers with their appropriate cells. This test looks for the first and last cells in each row and sees if they differ in layout or font weight."
    }
  },
  "tableWithBothHeadersUseScope": {
    "selector": "table:has(tr:not(table tr:first) th:not(th[scope]))",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "508": [
        "h"
      ],
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F91"
          ]
        }
      }
    },
    "title": {
      "en": "Data tables with multiple headers should use the \"scope\" attribute"
    },
    "description": {
      "en": "Where there are table headers for both rows and columns, use the \"scope\" attribute to help relate those headers with their appropriate cells."
    }
  },
  "tableWithMoreHeadersUseID": {
    "callback": "tableWithMoreHeadersUseID",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "Complex data tables should provide \"id\" attributes to headers"
    },
    "description": {
      "en": "and \"headers\" attributes for data cells"
    }
  },
  "tabularDataIsInTable": {
    "callback": "tabularDataIsInTable",
    "tags": [
      "table",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.3.1": {
          "techniques": [
            "F33",
            "F34",
            "F48"
          ]
        },
        "1.3.2": {
          "techniques": [
            "F33",
            "F34"
          ]
        }
      }
    },
    "title": {
      "en": "All tabular information should use a table"
    },
    "description": {
      "en": "Tables should be used when displaying tabular information."
    }
  },
  "textIsNotSmall": {
    "callback": "textIsNotSmall",
    "components": [
      "convertToPx"
    ],
    "tags": [
      "textsize",
      "content"
    ],
    "testability": 0.5,
    "type": "custom",
    "guidelines": [],
    "title": {
      "en": "The text size is not less than 9 pixels high"
    },
    "description": {
      "en": "To help users with difficulty reading small text, ensure text size is no less than 9 pixels high."
    }
  },
  "textareaHasAssociatedLabel": {
    "components": [
      "label"
    ],
    "selector": "textarea",
    "tags": [
      "form",
      "content"
    ],
    "testability": 1,
    "type": "label",
    "guidelines": {
      "wcag": {
        "1.1.1": {
          "techniques": [
            "H44"
          ]
        },
        "1.3.1": {
          "techniques": [
            "H44",
            "F68"
          ]
        },
        "3.3.2": {
          "techniques": [
            "H44"
          ]
        },
        "4.1.2": {
          "techniques": [
            "H44"
          ]
        }
      }
    },
    "title": {
      "en": "All textareas should have a corresponding label"
    },
    "description": {
      "en": "All <code>textarea</code> elements should have a corresponding <code>label</code> element. Screen readers often enter a \"form mode\" where only label text is read aloud to the user"
    }
  },
  "textareaLabelPositionedClose": {
    "components": [
      "labelProximity"
    ],
    "selector": "textarea",
    "tags": [
      "form",
      "content"
    ],
    "testability": 0.5,
    "type": "labelProximity",
    "guidelines": [],
    "title": {
      "en": "All textareas should have a label that is close to it"
    },
    "description": {
      "en": "All <code>textarea</code> elements should have a corresponding <code>label</code> element that is close in proximity.."
    }
  },
  "videoProvidesCaptions": {
    "selector": "video",
    "tags": [
      "media",
      "content"
    ],
    "testability": 0.5,
    "type": "selector",
    "guidelines": {
      "508": [
        "b",
        "b"
      ],
      "wcag": {
        "1.2.2": {
          "techniques": [
            "G87"
          ]
        },
        "1.2.4": {
          "techniques": [
            "G87"
          ]
        }
      }
    },
    "title": {
      "en": "All video tags must provide captions"
    },
    "description": {
      "en": "All HTML5 video tags must provide captions."
    }
  },
  "videosEmbeddedOrLinkedNeedCaptions": {
    "callback": "videosEmbeddedOrLinkedNeedCaptions",
    "components": [
      "video"
    ],
    "tags": [
      "media",
      "content"
    ],
    "testability": 1,
    "type": "custom",
    "guidelines": {
      "wcag": {
        "1.2.2": {
          "techniques": [
            "G87"
          ]
        },
        "1.2.4": {
          "techniques": [
            "G87"
          ]
        }
      }
    },
    "title": {
      "en": "All linked or embedded videos need captions"
    },
    "description": {
      "en": "Any video hosted or otherwise which is linked or embedded must have a caption."
    }
  }
}