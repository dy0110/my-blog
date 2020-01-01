const DarkTheme = {
  global: {
    colors: {
      active: {
        "0": "r",
        "1": "g",
        "2": "b",
        "3": "a",
        "4": "(",
        "5": "2",
        "6": "2",
        "7": "1",
        "8": ",",
        "9": "2",
        "10": "2",
        "11": "1",
        "12": ",",
        "13": "2",
        "14": "2",
        "15": "1",
        "16": ",",
        "17": "0",
        "18": ".",
        "19": "5",
        "20": ")",
        light: "#f50057",
        dark: "#ff4081"
      },
      brand: "#000000",
      control: {
        dark: "#f8f8f8",
        light: "#444444"
      },
      focus: "#2AD2C9",
      "accent-1": "#2AD2C9",
      "accent-2": "#FFC107",
      "accent-3": "#9C27B0",
      "accent-4": "#673AB7",
      "neutral-1": "#795548",
      "neutral-2": "#009688",
      "neutral-3": "#8BC34A",
      "neutral-4": "#CDDC39",
      "status-critical": "#FF4081",
      "status-error": "#F44336",
      "status-warning": "#FFEB3B",
      "status-ok": "#4CAF50",
      "status-unknown": "#9E9E9E",
      "status-disabled": "#9E9E9E"
    },
    control: {
      border: {
        radius: "0px"
      }
    },
    drop: {
      background: "#2a2a2a"
    },
    focus: {
      border: {
        color: "#f50057"
      }
    },
    hover: {
      background: {
        dark: "#ff4081",
        light: "#f50057"
      }
    }
  },
  anchor: {
    color: {
      dark: "#ff4081",
      light: "#f50057"
    }
  },
  button: {
    border: {
      radius: "0px"
    }
  },
  checkBox: {
    check: {
      radius: "0px"
    }
  },
  layer: {
    background: "#444444"
  }
};

const LightTheme = {
  global: {
    colors: {
      active: {
        "0": "r",
        "1": "g",
        "2": "b",
        "3": "a",
        "4": "(",
        "5": "2",
        "6": "2",
        "7": "1",
        "8": ",",
        "9": "2",
        "10": "2",
        "11": "1",
        "12": ",",
        "13": "2",
        "14": "2",
        "15": "1",
        "16": ",",
        "17": "0",
        "18": ".",
        "19": "5",
        "20": ")",
        light: "#f50057",
        dark: "#ff4081"
      },
      brand: "#00ABD4",
      control: {
        dark: "#ffffff",
        light: "#00ABD4"
      },
      focus: "#2AD2C9",
      "accent-1": "#2AD2C9",
      "accent-2": "#FFC107",
      "accent-3": "#9C27B0",
      "accent-4": "#673AB7",
      "neutral-1": "#795548",
      "neutral-2": "#009688",
      "neutral-3": "#8BC34A",
      "neutral-4": "#CDDC39",
      "status-critical": "#FF4081",
      "status-error": "#F44336",
      "status-warning": "#FFEB3B",
      "status-ok": "#4CAF50",
      "status-unknown": "#9E9E9E",
      "status-disabled": "#9E9E9E"
    },
    control: {
      border: {
        radius: "0px"
      }
    },
    drop: {
      background: "#f8f8f8"
    },
    focus: {
      border: {
        color: "#f50057"
      }
    },
    hover: {
      background: {
        dark: "#ff4081",
        light: "#f50057"
      }
    }
  },
  anchor: {
    color: {
      dark: "#7986cb",
      light: "#3f51b5"
    }
  },
  button: {
    border: {
      radius: "8px"
    }
  },
  checkBox: {
    check: {
      radius: "0px"
    },
    toggle: {
      color: {
        dark: "#bdbdbd",
        light: "#00ABD4"
      }
    }
  },
  radioButton: {
    border: {
      color: {
        light: "rgba(0, 98, 186, 0.5)"
      }
    }
  }
};

export const switchTheme = theme => {
  return theme ? DarkTheme : LightTheme;
};
