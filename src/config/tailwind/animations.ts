
export const keyframes = {
  'accordion-down': {
    from: {
      height: '0'
    },
    to: {
      height: 'var(--radix-accordion-content-height)'
    }
  },
  'accordion-up': {
    from: {
      height: 'var(--radix-accordion-content-height)'
    },
    to: {
      height: '0'
    }
  },
  'fade-in': {
    '0%': {
      opacity: '0',
      transform: 'translateY(30px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'fade-in-up': {
    '0%': {
      opacity: '0',
      transform: 'translateY(60px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'fade-in-left': {
    '0%': {
      opacity: '0',
      transform: 'translateX(-60px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateX(0)'
    }
  },
  'fade-in-right': {
    '0%': {
      opacity: '0',
      transform: 'translateX(60px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateX(0)'
    }
  },
  'slide-in': {
    '0%': {
      transform: 'translateX(-100%)'
    },
    '100%': {
      transform: 'translateX(0)'
    }
  },
  'bounce-in': {
    '0%': {
      transform: 'scale(0.3)',
      opacity: '0'
    },
    '50%': {
      transform: 'scale(1.05)',
      opacity: '0.8'
    },
    '100%': {
      transform: 'scale(1)',
      opacity: '1'
    }
  },
  'float': {
    '0%, 100%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(-10px)'
    }
  },
  'parallax': {
    '0%': {
      transform: 'translateY(0px)'
    },
    '100%': {
      transform: 'translateY(-50px)'
    }
  },
  'zoom-in': {
    '0%': {
      transform: 'scale(0.8)',
      opacity: '0'
    },
    '100%': {
      transform: 'scale(1)',
      opacity: '1'
    }
  },
  'underline-grow': {
    '0%': {
      width: '0%'
    },
    '100%': {
      width: '100%'
    }
  }
};

export const animations = {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in': 'fade-in 0.8s ease-out',
  'fade-in-up': 'fade-in-up 1s ease-out',
  'fade-in-left': 'fade-in-left 0.8s ease-out',
  'fade-in-right': 'fade-in-right 0.8s ease-out',
  'slide-in': 'slide-in 0.5s ease-out',
  'bounce-in': 'bounce-in 0.8s ease-out',
  'float': 'float 3s ease-in-out infinite',
  'parallax': 'parallax 20s linear infinite',
  'zoom-in': 'zoom-in 0.6s ease-out',
  'underline-grow': 'underline-grow 0.3s ease-out'
};
