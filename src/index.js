module.exports = {
    install(Vue, { websiteId, disabled }) {
      if (!disabled && (!websiteId || websiteId.length === 0)) {
        console.warn("Please provide a Crisp Chat Website ID");
      } else {
          window.CRISP_WEBSITE_ID = websiteId
      }

      const disabledLogger = function(method, ...args) {
        console.log("Crisp Chat is disabled, you called:", { method, args });
      };

      if (disabled) {
        window.$crisp = disabledLogger;
      }

      const root = new Vue()
      root._script = document.createElement("script");
      root._script.type = "text/javascript";
      root._script.async = true;
      root._script.id = "crisp-chat";
      root._script.src = "https://client.crisp.chat/l.js";

      let isLoaded = false

      root.load = () => {
        if (isLoaded) {
          return;
        }

        delete window.$crisp;

        const first = document.getElementsByTagName("script")[0];
        first.parentNode.insertBefore(root._script, first);

        root._script.onload = (event) => {
          isLoaded = true

          root.$emit("loaded", event);
        }

      };

      if (!disabled) {
        root.load(websiteId);
      }

      root.reset = () => window.$crisp.reset();
      root.do = (...args) => window.$crisp.do(...args);
      root.is = (...args) => window.$crisp.is(...args);
      root.get = (...args) => window.$crisp.get(...args);
      root.set = (...args) => window.$crisp.set(...args);
      root.config = (...args) => window.$crisp.config(...args);
      root.on = (...args) => window.$crisp.on(...args);
      root.off = (...args) => window.$crisp.off(...args);
      root.push = (...args) => window.$crisp.push(...args);

      Object.defineProperty(root, "$crisp", {
        get() {
          return window.$crisp;
        }
      });

      Vue.prototype.$crisp = root;
    }
  };
