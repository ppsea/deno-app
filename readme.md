# first deno-application

### install deno for mac arm64

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### configure zsh

```
export DENO_INSTALL="/Users/{YOUR_NAME}/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

### install deno extensions for vscode

```
denoland.vscode-deno
```

- Install the Deno CLI.
- Install this extension.
- Ensure deno is available in the environment path, or set its path via the deno.path setting in VSCode.
- Open the VS Code command palette with Ctrl+Shift+P, and run the Deno: Initialize Workspace Configuration command.

### how to run this app

```
deno run --allow-net welcome.ts
```

### Denon, hot reloader like nodemon.

- installation
- [https://deno.land/x/denon](https://deno.land/x/denon)

```
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

- check denon

```
denon --version
```

- configure zsh

```
export Denon="/Users/henry/.deno/bin/denon"
```

- run denon

```
denon run --allow-net --allow-env denon.ts
```
