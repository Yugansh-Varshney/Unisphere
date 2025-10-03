
  # UniSphere Campus App

  This is a code bundle for UniSphere Campus App. 

  ## Running the code

  Run `npm i` to install the dependencies. yes

  Run `npm run dev` to start the development server.
  
```
Unisphere
├─ .DS_Store
├─ .npmrc
├─ GEMINI.md
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ Computer_Network.pdf
├─ src
│  ├─ App.tsx
│  ├─ Attributions.md
│  ├─ components
│  │  ├─ AIRecommendations.tsx
│  │  ├─ Dashboard.tsx
│  │  ├─ LandingPage.tsx
│  │  ├─ Navigation.tsx
│  │  ├─ auth
│  │  │  ├─ LoginForm.tsx
│  │  │  └─ SignupForm.tsx
│  │  ├─ features
│  │  │  ├─ Community
│  │  │  │  ├─ Community.tsx
│  │  │  │  └─ PostCard.tsx
│  │  │  ├─ JobFinder
│  │  │  │  ├─ JobCard.tsx
│  │  │  │  └─ JobFinder.tsx
│  │  │  ├─ Marketplace
│  │  │  │  ├─ Marketplace.tsx
│  │  │  │  ├─ MarketplaceItem.tsx
│  │  │  │  └─ PostItemForm.tsx
│  │  │  ├─ NotesHub
│  │  │  │  ├─ Forum.tsx
│  │  │  │  ├─ NoteCard.tsx
│  │  │  │  └─ NotesHub.tsx
│  │  │  └─ StudyPlanner.tsx
│  │  ├─ figma
│  │  │  └─ ImageWithFallback.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ alert-dialog.tsx
│  │     ├─ alert.tsx
│  │     ├─ aspect-ratio.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ breadcrumb.tsx
│  │     ├─ button.tsx
│  │     ├─ calendar.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ chart.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ collapsible.tsx
│  │     ├─ command.tsx
│  │     ├─ context-menu.tsx
│  │     ├─ dialog.tsx
│  │     ├─ drawer.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ hover-card.tsx
│  │     ├─ input-otp.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ menubar.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ pagination.tsx
│  │     ├─ popover.tsx
│  │     ├─ progress.tsx
│  │     ├─ radio-group.tsx
│  │     ├─ resizable.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ slider.tsx
│  │     ├─ sonner.tsx
│  │     ├─ switch.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     ├─ textarea.tsx
│  │     ├─ toggle-group.tsx
│  │     ├─ toggle.tsx
│  │     ├─ tooltip.tsx
│  │     ├─ use-mobile.ts
│  │     └─ utils.ts
│  ├─ guidelines
│  │  └─ Guidelines.md
│  ├─ index.css
│  ├─ main.tsx
│  ├─ styles
│  │  └─ globals.css
│  ├─ supabase
│  │  └─ functions
│  │     └─ server
│  │        ├─ index.tsx
│  │        └─ kv_store.tsx
│  └─ utils
│     ├─ api.tsx
│     ├─ auth.tsx
│     └─ supabase
│        ├─ client.tsx
│        └─ info.tsx
├─ try.txt
├─ unisphere-bot-py
│  ├─ .env
│  ├─ __pycache__
│  │  └─ main.cpython-313.pyc
│  ├─ check_models.py
│  ├─ main.py
│  ├─ requirments.txt
│  └─ venv
│     ├─ bin
│     │  ├─ Activate.ps1
│     │  ├─ activate
│     │  ├─ activate.csh
│     │  ├─ activate.fish
│     │  ├─ dotenv
│     │  ├─ fastapi
│     │  ├─ normalizer
│     │  ├─ pip
│     │  ├─ pip3
│     │  ├─ pip3.13
│     │  ├─ pyrsa-decrypt
│     │  ├─ pyrsa-encrypt
│     │  ├─ pyrsa-keygen
│     │  ├─ pyrsa-priv2pub
│     │  ├─ pyrsa-sign
│     │  ├─ pyrsa-verify
│     │  ├─ python
│     │  ├─ python3
│     │  ├─ python3.13
│     │  ├─ tqdm
│     │  └─ uvicorn
│     ├─ include
│     │  └─ python3.13
│     ├─ lib
│     │  └─ python3.13
│     │     └─ site-packages
│     │        ├─ __pycache__
│     │        │  ├─ google_auth_httplib2.cpython-313.pyc
│     │        │  └─ typing_extensions.cpython-313.pyc
│     │        ├─ annotated_types
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  └─ test_cases.cpython-313.pyc
│     │        │  ├─ py.typed
│     │        │  └─ test_cases.py
│     │        ├─ annotated_types-0.7.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE
│     │        ├─ anyio
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ from_thread.cpython-313.pyc
│     │        │  │  ├─ lowlevel.cpython-313.pyc
│     │        │  │  ├─ pytest_plugin.cpython-313.pyc
│     │        │  │  ├─ to_interpreter.cpython-313.pyc
│     │        │  │  ├─ to_process.cpython-313.pyc
│     │        │  │  └─ to_thread.cpython-313.pyc
│     │        │  ├─ _backends
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _asyncio.cpython-313.pyc
│     │        │  │  │  └─ _trio.cpython-313.pyc
│     │        │  │  ├─ _asyncio.py
│     │        │  │  └─ _trio.py
│     │        │  ├─ _core
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _asyncio_selector_thread.cpython-313.pyc
│     │        │  │  │  ├─ _contextmanagers.cpython-313.pyc
│     │        │  │  │  ├─ _eventloop.cpython-313.pyc
│     │        │  │  │  ├─ _exceptions.cpython-313.pyc
│     │        │  │  │  ├─ _fileio.cpython-313.pyc
│     │        │  │  │  ├─ _resources.cpython-313.pyc
│     │        │  │  │  ├─ _signals.cpython-313.pyc
│     │        │  │  │  ├─ _sockets.cpython-313.pyc
│     │        │  │  │  ├─ _streams.cpython-313.pyc
│     │        │  │  │  ├─ _subprocesses.cpython-313.pyc
│     │        │  │  │  ├─ _synchronization.cpython-313.pyc
│     │        │  │  │  ├─ _tasks.cpython-313.pyc
│     │        │  │  │  ├─ _tempfile.cpython-313.pyc
│     │        │  │  │  ├─ _testing.cpython-313.pyc
│     │        │  │  │  └─ _typedattr.cpython-313.pyc
│     │        │  │  ├─ _asyncio_selector_thread.py
│     │        │  │  ├─ _contextmanagers.py
│     │        │  │  ├─ _eventloop.py
│     │        │  │  ├─ _exceptions.py
│     │        │  │  ├─ _fileio.py
│     │        │  │  ├─ _resources.py
│     │        │  │  ├─ _signals.py
│     │        │  │  ├─ _sockets.py
│     │        │  │  ├─ _streams.py
│     │        │  │  ├─ _subprocesses.py
│     │        │  │  ├─ _synchronization.py
│     │        │  │  ├─ _tasks.py
│     │        │  │  ├─ _tempfile.py
│     │        │  │  ├─ _testing.py
│     │        │  │  └─ _typedattr.py
│     │        │  ├─ abc
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _eventloop.cpython-313.pyc
│     │        │  │  │  ├─ _resources.cpython-313.pyc
│     │        │  │  │  ├─ _sockets.cpython-313.pyc
│     │        │  │  │  ├─ _streams.cpython-313.pyc
│     │        │  │  │  ├─ _subprocesses.cpython-313.pyc
│     │        │  │  │  ├─ _tasks.cpython-313.pyc
│     │        │  │  │  └─ _testing.cpython-313.pyc
│     │        │  │  ├─ _eventloop.py
│     │        │  │  ├─ _resources.py
│     │        │  │  ├─ _sockets.py
│     │        │  │  ├─ _streams.py
│     │        │  │  ├─ _subprocesses.py
│     │        │  │  ├─ _tasks.py
│     │        │  │  └─ _testing.py
│     │        │  ├─ from_thread.py
│     │        │  ├─ lowlevel.py
│     │        │  ├─ py.typed
│     │        │  ├─ pytest_plugin.py
│     │        │  ├─ streams
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ buffered.cpython-313.pyc
│     │        │  │  │  ├─ file.cpython-313.pyc
│     │        │  │  │  ├─ memory.cpython-313.pyc
│     │        │  │  │  ├─ stapled.cpython-313.pyc
│     │        │  │  │  ├─ text.cpython-313.pyc
│     │        │  │  │  └─ tls.cpython-313.pyc
│     │        │  │  ├─ buffered.py
│     │        │  │  ├─ file.py
│     │        │  │  ├─ memory.py
│     │        │  │  ├─ stapled.py
│     │        │  │  ├─ text.py
│     │        │  │  └─ tls.py
│     │        │  ├─ to_interpreter.py
│     │        │  ├─ to_process.py
│     │        │  └─ to_thread.py
│     │        ├─ anyio-4.11.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ entry_points.txt
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ apiclient
│     │        │  ├─ __init__.py
│     │        │  └─ __pycache__
│     │        │     └─ __init__.cpython-313.pyc
│     │        ├─ cachetools
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _cached.cpython-313.pyc
│     │        │  │  ├─ _cachedmethod.cpython-313.pyc
│     │        │  │  ├─ func.cpython-313.pyc
│     │        │  │  └─ keys.cpython-313.pyc
│     │        │  ├─ _cached.py
│     │        │  ├─ _cachedmethod.py
│     │        │  ├─ func.py
│     │        │  └─ keys.py
│     │        ├─ cachetools-6.2.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ certifi
│     │        │  ├─ __init__.py
│     │        │  ├─ __main__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  └─ core.cpython-313.pyc
│     │        │  ├─ cacert.pem
│     │        │  ├─ core.py
│     │        │  └─ py.typed
│     │        ├─ certifi-2025.8.3.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ charset_normalizer
│     │        │  ├─ __init__.py
│     │        │  ├─ __main__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  ├─ api.cpython-313.pyc
│     │        │  │  ├─ cd.cpython-313.pyc
│     │        │  │  ├─ constant.cpython-313.pyc
│     │        │  │  ├─ legacy.cpython-313.pyc
│     │        │  │  ├─ md.cpython-313.pyc
│     │        │  │  ├─ models.cpython-313.pyc
│     │        │  │  ├─ utils.cpython-313.pyc
│     │        │  │  └─ version.cpython-313.pyc
│     │        │  ├─ api.py
│     │        │  ├─ cd.py
│     │        │  ├─ cli
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __main__.py
│     │        │  │  └─ __pycache__
│     │        │  │     ├─ __init__.cpython-313.pyc
│     │        │  │     └─ __main__.cpython-313.pyc
│     │        │  ├─ constant.py
│     │        │  ├─ legacy.py
│     │        │  ├─ md.cpython-313-darwin.so
│     │        │  ├─ md.py
│     │        │  ├─ md__mypyc.cpython-313-darwin.so
│     │        │  ├─ models.py
│     │        │  ├─ py.typed
│     │        │  ├─ utils.py
│     │        │  └─ version.py
│     │        ├─ charset_normalizer-3.4.3.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ entry_points.txt
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ click
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _compat.cpython-313.pyc
│     │        │  │  ├─ _termui_impl.cpython-313.pyc
│     │        │  │  ├─ _textwrap.cpython-313.pyc
│     │        │  │  ├─ _utils.cpython-313.pyc
│     │        │  │  ├─ _winconsole.cpython-313.pyc
│     │        │  │  ├─ core.cpython-313.pyc
│     │        │  │  ├─ decorators.cpython-313.pyc
│     │        │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  ├─ formatting.cpython-313.pyc
│     │        │  │  ├─ globals.cpython-313.pyc
│     │        │  │  ├─ parser.cpython-313.pyc
│     │        │  │  ├─ shell_completion.cpython-313.pyc
│     │        │  │  ├─ termui.cpython-313.pyc
│     │        │  │  ├─ testing.cpython-313.pyc
│     │        │  │  ├─ types.cpython-313.pyc
│     │        │  │  └─ utils.cpython-313.pyc
│     │        │  ├─ _compat.py
│     │        │  ├─ _termui_impl.py
│     │        │  ├─ _textwrap.py
│     │        │  ├─ _utils.py
│     │        │  ├─ _winconsole.py
│     │        │  ├─ core.py
│     │        │  ├─ decorators.py
│     │        │  ├─ exceptions.py
│     │        │  ├─ formatting.py
│     │        │  ├─ globals.py
│     │        │  ├─ parser.py
│     │        │  ├─ py.typed
│     │        │  ├─ shell_completion.py
│     │        │  ├─ termui.py
│     │        │  ├─ testing.py
│     │        │  ├─ types.py
│     │        │  └─ utils.py
│     │        ├─ click-8.3.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE.txt
│     │        ├─ dotenv
│     │        │  ├─ __init__.py
│     │        │  ├─ __main__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  ├─ cli.cpython-313.pyc
│     │        │  │  ├─ ipython.cpython-313.pyc
│     │        │  │  ├─ main.cpython-313.pyc
│     │        │  │  ├─ parser.cpython-313.pyc
│     │        │  │  ├─ variables.cpython-313.pyc
│     │        │  │  └─ version.cpython-313.pyc
│     │        │  ├─ cli.py
│     │        │  ├─ ipython.py
│     │        │  ├─ main.py
│     │        │  ├─ parser.py
│     │        │  ├─ py.typed
│     │        │  ├─ variables.py
│     │        │  └─ version.py
│     │        ├─ fastapi
│     │        │  ├─ __init__.py
│     │        │  ├─ __main__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  ├─ _compat.cpython-313.pyc
│     │        │  │  ├─ applications.cpython-313.pyc
│     │        │  │  ├─ background.cpython-313.pyc
│     │        │  │  ├─ cli.cpython-313.pyc
│     │        │  │  ├─ concurrency.cpython-313.pyc
│     │        │  │  ├─ datastructures.cpython-313.pyc
│     │        │  │  ├─ encoders.cpython-313.pyc
│     │        │  │  ├─ exception_handlers.cpython-313.pyc
│     │        │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  ├─ logger.cpython-313.pyc
│     │        │  │  ├─ param_functions.cpython-313.pyc
│     │        │  │  ├─ params.cpython-313.pyc
│     │        │  │  ├─ requests.cpython-313.pyc
│     │        │  │  ├─ responses.cpython-313.pyc
│     │        │  │  ├─ routing.cpython-313.pyc
│     │        │  │  ├─ staticfiles.cpython-313.pyc
│     │        │  │  ├─ templating.cpython-313.pyc
│     │        │  │  ├─ testclient.cpython-313.pyc
│     │        │  │  ├─ types.cpython-313.pyc
│     │        │  │  ├─ utils.cpython-313.pyc
│     │        │  │  └─ websockets.cpython-313.pyc
│     │        │  ├─ _compat.py
│     │        │  ├─ applications.py
│     │        │  ├─ background.py
│     │        │  ├─ cli.py
│     │        │  ├─ concurrency.py
│     │        │  ├─ datastructures.py
│     │        │  ├─ dependencies
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ models.cpython-313.pyc
│     │        │  │  │  └─ utils.cpython-313.pyc
│     │        │  │  ├─ models.py
│     │        │  │  └─ utils.py
│     │        │  ├─ encoders.py
│     │        │  ├─ exception_handlers.py
│     │        │  ├─ exceptions.py
│     │        │  ├─ logger.py
│     │        │  ├─ middleware
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ asyncexitstack.cpython-313.pyc
│     │        │  │  │  ├─ cors.cpython-313.pyc
│     │        │  │  │  ├─ gzip.cpython-313.pyc
│     │        │  │  │  ├─ httpsredirect.cpython-313.pyc
│     │        │  │  │  ├─ trustedhost.cpython-313.pyc
│     │        │  │  │  └─ wsgi.cpython-313.pyc
│     │        │  │  ├─ asyncexitstack.py
│     │        │  │  ├─ cors.py
│     │        │  │  ├─ gzip.py
│     │        │  │  ├─ httpsredirect.py
│     │        │  │  ├─ trustedhost.py
│     │        │  │  └─ wsgi.py
│     │        │  ├─ openapi
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ constants.cpython-313.pyc
│     │        │  │  │  ├─ docs.cpython-313.pyc
│     │        │  │  │  ├─ models.cpython-313.pyc
│     │        │  │  │  └─ utils.cpython-313.pyc
│     │        │  │  ├─ constants.py
│     │        │  │  ├─ docs.py
│     │        │  │  ├─ models.py
│     │        │  │  └─ utils.py
│     │        │  ├─ param_functions.py
│     │        │  ├─ params.py
│     │        │  ├─ py.typed
│     │        │  ├─ requests.py
│     │        │  ├─ responses.py
│     │        │  ├─ routing.py
│     │        │  ├─ security
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ api_key.cpython-313.pyc
│     │        │  │  │  ├─ base.cpython-313.pyc
│     │        │  │  │  ├─ http.cpython-313.pyc
│     │        │  │  │  ├─ oauth2.cpython-313.pyc
│     │        │  │  │  ├─ open_id_connect_url.cpython-313.pyc
│     │        │  │  │  └─ utils.cpython-313.pyc
│     │        │  │  ├─ api_key.py
│     │        │  │  ├─ base.py
│     │        │  │  ├─ http.py
│     │        │  │  ├─ oauth2.py
│     │        │  │  ├─ open_id_connect_url.py
│     │        │  │  └─ utils.py
│     │        │  ├─ staticfiles.py
│     │        │  ├─ templating.py
│     │        │  ├─ testclient.py
│     │        │  ├─ types.py
│     │        │  ├─ utils.py
│     │        │  └─ websockets.py
│     │        ├─ fastapi-0.118.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ REQUESTED
│     │        │  ├─ WHEEL
│     │        │  ├─ entry_points.txt
│     │        │  └─ licenses
│     │        │     └─ LICENSE
│     │        ├─ google
│     │        │  ├─ _upb
│     │        │  │  └─ _message.abi3.so
│     │        │  ├─ ai
│     │        │  │  ├─ generativelanguage
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ gapic_version.cpython-313.pyc
│     │        │  │  │  ├─ gapic_version.py
│     │        │  │  │  └─ py.typed
│     │        │  │  ├─ generativelanguage_v1
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ gapic_version.cpython-313.pyc
│     │        │  │  │  ├─ gapic_metadata.json
│     │        │  │  │  ├─ gapic_version.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ services
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  └─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ generative_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  └─ model_service
│     │        │  │  │  │     ├─ __init__.py
│     │        │  │  │  │     ├─ __pycache__
│     │        │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │     │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │     │  ├─ client.cpython-313.pyc
│     │        │  │  │  │     │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │     ├─ async_client.py
│     │        │  │  │  │     ├─ client.py
│     │        │  │  │  │     ├─ pagers.py
│     │        │  │  │  │     └─ transports
│     │        │  │  │  │        ├─ __init__.py
│     │        │  │  │  │        ├─ __pycache__
│     │        │  │  │  │        │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │        │  ├─ base.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │        │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │        │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │        ├─ base.py
│     │        │  │  │  │        ├─ grpc.py
│     │        │  │  │  │        ├─ grpc_asyncio.py
│     │        │  │  │  │        ├─ rest.py
│     │        │  │  │  │        └─ rest_base.py
│     │        │  │  │  └─ types
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ citation.cpython-313.pyc
│     │        │  │  │     │  ├─ content.cpython-313.pyc
│     │        │  │  │     │  ├─ generative_service.cpython-313.pyc
│     │        │  │  │     │  ├─ model.cpython-313.pyc
│     │        │  │  │     │  ├─ model_service.cpython-313.pyc
│     │        │  │  │     │  └─ safety.cpython-313.pyc
│     │        │  │  │     ├─ citation.py
│     │        │  │  │     ├─ content.py
│     │        │  │  │     ├─ generative_service.py
│     │        │  │  │     ├─ model.py
│     │        │  │  │     ├─ model_service.py
│     │        │  │  │     └─ safety.py
│     │        │  │  ├─ generativelanguage_v1alpha
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ gapic_version.cpython-313.pyc
│     │        │  │  │  ├─ gapic_metadata.json
│     │        │  │  │  ├─ gapic_version.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ services
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  └─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ cache_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ discuss_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ file_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ generative_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ model_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ permission_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ prediction_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ retriever_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  └─ text_service
│     │        │  │  │  │     ├─ __init__.py
│     │        │  │  │  │     ├─ __pycache__
│     │        │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │     │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │     │  └─ client.cpython-313.pyc
│     │        │  │  │  │     ├─ async_client.py
│     │        │  │  │  │     ├─ client.py
│     │        │  │  │  │     └─ transports
│     │        │  │  │  │        ├─ __init__.py
│     │        │  │  │  │        ├─ __pycache__
│     │        │  │  │  │        │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │        │  ├─ base.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │        │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │        │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │        ├─ base.py
│     │        │  │  │  │        ├─ grpc.py
│     │        │  │  │  │        ├─ grpc_asyncio.py
│     │        │  │  │  │        ├─ rest.py
│     │        │  │  │  │        └─ rest_base.py
│     │        │  │  │  └─ types
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ cache_service.cpython-313.pyc
│     │        │  │  │     │  ├─ cached_content.cpython-313.pyc
│     │        │  │  │     │  ├─ citation.cpython-313.pyc
│     │        │  │  │     │  ├─ content.cpython-313.pyc
│     │        │  │  │     │  ├─ discuss_service.cpython-313.pyc
│     │        │  │  │     │  ├─ file.cpython-313.pyc
│     │        │  │  │     │  ├─ file_service.cpython-313.pyc
│     │        │  │  │     │  ├─ generative_service.cpython-313.pyc
│     │        │  │  │     │  ├─ model.cpython-313.pyc
│     │        │  │  │     │  ├─ model_service.cpython-313.pyc
│     │        │  │  │     │  ├─ permission.cpython-313.pyc
│     │        │  │  │     │  ├─ permission_service.cpython-313.pyc
│     │        │  │  │     │  ├─ prediction_service.cpython-313.pyc
│     │        │  │  │     │  ├─ retriever.cpython-313.pyc
│     │        │  │  │     │  ├─ retriever_service.cpython-313.pyc
│     │        │  │  │     │  ├─ safety.cpython-313.pyc
│     │        │  │  │     │  ├─ text_service.cpython-313.pyc
│     │        │  │  │     │  └─ tuned_model.cpython-313.pyc
│     │        │  │  │     ├─ cache_service.py
│     │        │  │  │     ├─ cached_content.py
│     │        │  │  │     ├─ citation.py
│     │        │  │  │     ├─ content.py
│     │        │  │  │     ├─ discuss_service.py
│     │        │  │  │     ├─ file.py
│     │        │  │  │     ├─ file_service.py
│     │        │  │  │     ├─ generative_service.py
│     │        │  │  │     ├─ model.py
│     │        │  │  │     ├─ model_service.py
│     │        │  │  │     ├─ permission.py
│     │        │  │  │     ├─ permission_service.py
│     │        │  │  │     ├─ prediction_service.py
│     │        │  │  │     ├─ retriever.py
│     │        │  │  │     ├─ retriever_service.py
│     │        │  │  │     ├─ safety.py
│     │        │  │  │     ├─ text_service.py
│     │        │  │  │     └─ tuned_model.py
│     │        │  │  ├─ generativelanguage_v1beta
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ gapic_version.cpython-313.pyc
│     │        │  │  │  ├─ gapic_metadata.json
│     │        │  │  │  ├─ gapic_version.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ services
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  └─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ cache_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ discuss_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ file_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ generative_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ model_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ permission_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ prediction_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ retriever_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  └─ text_service
│     │        │  │  │  │     ├─ __init__.py
│     │        │  │  │  │     ├─ __pycache__
│     │        │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │     │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │     │  └─ client.cpython-313.pyc
│     │        │  │  │  │     ├─ async_client.py
│     │        │  │  │  │     ├─ client.py
│     │        │  │  │  │     └─ transports
│     │        │  │  │  │        ├─ __init__.py
│     │        │  │  │  │        ├─ __pycache__
│     │        │  │  │  │        │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │        │  ├─ base.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │        │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │        │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │        ├─ base.py
│     │        │  │  │  │        ├─ grpc.py
│     │        │  │  │  │        ├─ grpc_asyncio.py
│     │        │  │  │  │        ├─ rest.py
│     │        │  │  │  │        └─ rest_base.py
│     │        │  │  │  └─ types
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ cache_service.cpython-313.pyc
│     │        │  │  │     │  ├─ cached_content.cpython-313.pyc
│     │        │  │  │     │  ├─ citation.cpython-313.pyc
│     │        │  │  │     │  ├─ content.cpython-313.pyc
│     │        │  │  │     │  ├─ discuss_service.cpython-313.pyc
│     │        │  │  │     │  ├─ file.cpython-313.pyc
│     │        │  │  │     │  ├─ file_service.cpython-313.pyc
│     │        │  │  │     │  ├─ generative_service.cpython-313.pyc
│     │        │  │  │     │  ├─ model.cpython-313.pyc
│     │        │  │  │     │  ├─ model_service.cpython-313.pyc
│     │        │  │  │     │  ├─ permission.cpython-313.pyc
│     │        │  │  │     │  ├─ permission_service.cpython-313.pyc
│     │        │  │  │     │  ├─ prediction_service.cpython-313.pyc
│     │        │  │  │     │  ├─ retriever.cpython-313.pyc
│     │        │  │  │     │  ├─ retriever_service.cpython-313.pyc
│     │        │  │  │     │  ├─ safety.cpython-313.pyc
│     │        │  │  │     │  ├─ text_service.cpython-313.pyc
│     │        │  │  │     │  └─ tuned_model.cpython-313.pyc
│     │        │  │  │     ├─ cache_service.py
│     │        │  │  │     ├─ cached_content.py
│     │        │  │  │     ├─ citation.py
│     │        │  │  │     ├─ content.py
│     │        │  │  │     ├─ discuss_service.py
│     │        │  │  │     ├─ file.py
│     │        │  │  │     ├─ file_service.py
│     │        │  │  │     ├─ generative_service.py
│     │        │  │  │     ├─ model.py
│     │        │  │  │     ├─ model_service.py
│     │        │  │  │     ├─ permission.py
│     │        │  │  │     ├─ permission_service.py
│     │        │  │  │     ├─ prediction_service.py
│     │        │  │  │     ├─ retriever.py
│     │        │  │  │     ├─ retriever_service.py
│     │        │  │  │     ├─ safety.py
│     │        │  │  │     ├─ text_service.py
│     │        │  │  │     └─ tuned_model.py
│     │        │  │  ├─ generativelanguage_v1beta2
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ gapic_version.cpython-313.pyc
│     │        │  │  │  ├─ gapic_metadata.json
│     │        │  │  │  ├─ gapic_version.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ services
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  └─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ discuss_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ client.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  ├─ model_service
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │  │  │  │  ├─ async_client.py
│     │        │  │  │  │  │  ├─ client.py
│     │        │  │  │  │  │  ├─ pagers.py
│     │        │  │  │  │  │  └─ transports
│     │        │  │  │  │  │     ├─ __init__.py
│     │        │  │  │  │  │     ├─ __pycache__
│     │        │  │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │  │     ├─ base.py
│     │        │  │  │  │  │     ├─ grpc.py
│     │        │  │  │  │  │     ├─ grpc_asyncio.py
│     │        │  │  │  │  │     ├─ rest.py
│     │        │  │  │  │  │     └─ rest_base.py
│     │        │  │  │  │  └─ text_service
│     │        │  │  │  │     ├─ __init__.py
│     │        │  │  │  │     ├─ __pycache__
│     │        │  │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │     │  ├─ async_client.cpython-313.pyc
│     │        │  │  │  │     │  └─ client.cpython-313.pyc
│     │        │  │  │  │     ├─ async_client.py
│     │        │  │  │  │     ├─ client.py
│     │        │  │  │  │     └─ transports
│     │        │  │  │  │        ├─ __init__.py
│     │        │  │  │  │        ├─ __pycache__
│     │        │  │  │  │        │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │        │  ├─ base.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │        │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │  │  │        │  ├─ rest.cpython-313.pyc
│     │        │  │  │  │        │  └─ rest_base.cpython-313.pyc
│     │        │  │  │  │        ├─ base.py
│     │        │  │  │  │        ├─ grpc.py
│     │        │  │  │  │        ├─ grpc_asyncio.py
│     │        │  │  │  │        ├─ rest.py
│     │        │  │  │  │        └─ rest_base.py
│     │        │  │  │  └─ types
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ citation.cpython-313.pyc
│     │        │  │  │     │  ├─ discuss_service.cpython-313.pyc
│     │        │  │  │     │  ├─ model.cpython-313.pyc
│     │        │  │  │     │  ├─ model_service.cpython-313.pyc
│     │        │  │  │     │  ├─ safety.cpython-313.pyc
│     │        │  │  │     │  └─ text_service.cpython-313.pyc
│     │        │  │  │     ├─ citation.py
│     │        │  │  │     ├─ discuss_service.py
│     │        │  │  │     ├─ model.py
│     │        │  │  │     ├─ model_service.py
│     │        │  │  │     ├─ safety.py
│     │        │  │  │     └─ text_service.py
│     │        │  │  └─ generativelanguage_v1beta3
│     │        │  │     ├─ __init__.py
│     │        │  │     ├─ __pycache__
│     │        │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  └─ gapic_version.cpython-313.pyc
│     │        │  │     ├─ gapic_metadata.json
│     │        │  │     ├─ gapic_version.py
│     │        │  │     ├─ py.typed
│     │        │  │     ├─ services
│     │        │  │     │  ├─ __init__.py
│     │        │  │     │  ├─ __pycache__
│     │        │  │     │  │  └─ __init__.cpython-313.pyc
│     │        │  │     │  ├─ discuss_service
│     │        │  │     │  │  ├─ __init__.py
│     │        │  │     │  │  ├─ __pycache__
│     │        │  │     │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │     │  │  │  └─ client.cpython-313.pyc
│     │        │  │     │  │  ├─ async_client.py
│     │        │  │     │  │  ├─ client.py
│     │        │  │     │  │  └─ transports
│     │        │  │     │  │     ├─ __init__.py
│     │        │  │     │  │     ├─ __pycache__
│     │        │  │     │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  │     │  ├─ base.cpython-313.pyc
│     │        │  │     │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │     │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │     │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │     │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │     │  │     ├─ base.py
│     │        │  │     │  │     ├─ grpc.py
│     │        │  │     │  │     ├─ grpc_asyncio.py
│     │        │  │     │  │     ├─ rest.py
│     │        │  │     │  │     └─ rest_base.py
│     │        │  │     │  ├─ model_service
│     │        │  │     │  │  ├─ __init__.py
│     │        │  │     │  │  ├─ __pycache__
│     │        │  │     │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │     │  │  │  ├─ client.cpython-313.pyc
│     │        │  │     │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │     │  │  ├─ async_client.py
│     │        │  │     │  │  ├─ client.py
│     │        │  │     │  │  ├─ pagers.py
│     │        │  │     │  │  └─ transports
│     │        │  │     │  │     ├─ __init__.py
│     │        │  │     │  │     ├─ __pycache__
│     │        │  │     │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  │     │  ├─ base.cpython-313.pyc
│     │        │  │     │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │     │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │     │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │     │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │     │  │     ├─ base.py
│     │        │  │     │  │     ├─ grpc.py
│     │        │  │     │  │     ├─ grpc_asyncio.py
│     │        │  │     │  │     ├─ rest.py
│     │        │  │     │  │     └─ rest_base.py
│     │        │  │     │  ├─ permission_service
│     │        │  │     │  │  ├─ __init__.py
│     │        │  │     │  │  ├─ __pycache__
│     │        │  │     │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  │  │  ├─ async_client.cpython-313.pyc
│     │        │  │     │  │  │  ├─ client.cpython-313.pyc
│     │        │  │     │  │  │  └─ pagers.cpython-313.pyc
│     │        │  │     │  │  ├─ async_client.py
│     │        │  │     │  │  ├─ client.py
│     │        │  │     │  │  ├─ pagers.py
│     │        │  │     │  │  └─ transports
│     │        │  │     │  │     ├─ __init__.py
│     │        │  │     │  │     ├─ __pycache__
│     │        │  │     │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  │     │  ├─ base.cpython-313.pyc
│     │        │  │     │  │     │  ├─ grpc.cpython-313.pyc
│     │        │  │     │  │     │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │     │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │     │  │     │  └─ rest_base.cpython-313.pyc
│     │        │  │     │  │     ├─ base.py
│     │        │  │     │  │     ├─ grpc.py
│     │        │  │     │  │     ├─ grpc_asyncio.py
│     │        │  │     │  │     ├─ rest.py
│     │        │  │     │  │     └─ rest_base.py
│     │        │  │     │  └─ text_service
│     │        │  │     │     ├─ __init__.py
│     │        │  │     │     ├─ __pycache__
│     │        │  │     │     │  ├─ __init__.cpython-313.pyc
│     │        │  │     │     │  ├─ async_client.cpython-313.pyc
│     │        │  │     │     │  └─ client.cpython-313.pyc
│     │        │  │     │     ├─ async_client.py
│     │        │  │     │     ├─ client.py
│     │        │  │     │     └─ transports
│     │        │  │     │        ├─ __init__.py
│     │        │  │     │        ├─ __pycache__
│     │        │  │     │        │  ├─ __init__.cpython-313.pyc
│     │        │  │     │        │  ├─ base.cpython-313.pyc
│     │        │  │     │        │  ├─ grpc.cpython-313.pyc
│     │        │  │     │        │  ├─ grpc_asyncio.cpython-313.pyc
│     │        │  │     │        │  ├─ rest.cpython-313.pyc
│     │        │  │     │        │  └─ rest_base.cpython-313.pyc
│     │        │  │     │        ├─ base.py
│     │        │  │     │        ├─ grpc.py
│     │        │  │     │        ├─ grpc_asyncio.py
│     │        │  │     │        ├─ rest.py
│     │        │  │     │        └─ rest_base.py
│     │        │  │     └─ types
│     │        │  │        ├─ __init__.py
│     │        │  │        ├─ __pycache__
│     │        │  │        │  ├─ __init__.cpython-313.pyc
│     │        │  │        │  ├─ citation.cpython-313.pyc
│     │        │  │        │  ├─ discuss_service.cpython-313.pyc
│     │        │  │        │  ├─ model.cpython-313.pyc
│     │        │  │        │  ├─ model_service.cpython-313.pyc
│     │        │  │        │  ├─ permission.cpython-313.pyc
│     │        │  │        │  ├─ permission_service.cpython-313.pyc
│     │        │  │        │  ├─ safety.cpython-313.pyc
│     │        │  │        │  ├─ text_service.cpython-313.pyc
│     │        │  │        │  └─ tuned_model.cpython-313.pyc
│     │        │  │        ├─ citation.py
│     │        │  │        ├─ discuss_service.py
│     │        │  │        ├─ model.py
│     │        │  │        ├─ model_service.py
│     │        │  │        ├─ permission.py
│     │        │  │        ├─ permission_service.py
│     │        │  │        ├─ safety.py
│     │        │  │        ├─ text_service.py
│     │        │  │        └─ tuned_model.py
│     │        │  ├─ api
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ annotations_pb2.cpython-313.pyc
│     │        │  │  │  ├─ auth_pb2.cpython-313.pyc
│     │        │  │  │  ├─ backend_pb2.cpython-313.pyc
│     │        │  │  │  ├─ billing_pb2.cpython-313.pyc
│     │        │  │  │  ├─ client_pb2.cpython-313.pyc
│     │        │  │  │  ├─ config_change_pb2.cpython-313.pyc
│     │        │  │  │  ├─ consumer_pb2.cpython-313.pyc
│     │        │  │  │  ├─ context_pb2.cpython-313.pyc
│     │        │  │  │  ├─ control_pb2.cpython-313.pyc
│     │        │  │  │  ├─ distribution_pb2.cpython-313.pyc
│     │        │  │  │  ├─ documentation_pb2.cpython-313.pyc
│     │        │  │  │  ├─ endpoint_pb2.cpython-313.pyc
│     │        │  │  │  ├─ error_reason_pb2.cpython-313.pyc
│     │        │  │  │  ├─ field_behavior_pb2.cpython-313.pyc
│     │        │  │  │  ├─ field_info_pb2.cpython-313.pyc
│     │        │  │  │  ├─ http_pb2.cpython-313.pyc
│     │        │  │  │  ├─ httpbody_pb2.cpython-313.pyc
│     │        │  │  │  ├─ label_pb2.cpython-313.pyc
│     │        │  │  │  ├─ launch_stage_pb2.cpython-313.pyc
│     │        │  │  │  ├─ log_pb2.cpython-313.pyc
│     │        │  │  │  ├─ logging_pb2.cpython-313.pyc
│     │        │  │  │  ├─ metric_pb2.cpython-313.pyc
│     │        │  │  │  ├─ monitored_resource_pb2.cpython-313.pyc
│     │        │  │  │  ├─ monitoring_pb2.cpython-313.pyc
│     │        │  │  │  ├─ policy_pb2.cpython-313.pyc
│     │        │  │  │  ├─ quota_pb2.cpython-313.pyc
│     │        │  │  │  ├─ resource_pb2.cpython-313.pyc
│     │        │  │  │  ├─ routing_pb2.cpython-313.pyc
│     │        │  │  │  ├─ service_pb2.cpython-313.pyc
│     │        │  │  │  ├─ source_info_pb2.cpython-313.pyc
│     │        │  │  │  ├─ system_parameter_pb2.cpython-313.pyc
│     │        │  │  │  ├─ usage_pb2.cpython-313.pyc
│     │        │  │  │  └─ visibility_pb2.cpython-313.pyc
│     │        │  │  ├─ annotations.proto
│     │        │  │  ├─ annotations_pb2.py
│     │        │  │  ├─ annotations_pb2.pyi
│     │        │  │  ├─ auth.proto
│     │        │  │  ├─ auth_pb2.py
│     │        │  │  ├─ auth_pb2.pyi
│     │        │  │  ├─ backend.proto
│     │        │  │  ├─ backend_pb2.py
│     │        │  │  ├─ backend_pb2.pyi
│     │        │  │  ├─ billing.proto
│     │        │  │  ├─ billing_pb2.py
│     │        │  │  ├─ billing_pb2.pyi
│     │        │  │  ├─ client.proto
│     │        │  │  ├─ client_pb2.py
│     │        │  │  ├─ client_pb2.pyi
│     │        │  │  ├─ config_change.proto
│     │        │  │  ├─ config_change_pb2.py
│     │        │  │  ├─ config_change_pb2.pyi
│     │        │  │  ├─ consumer.proto
│     │        │  │  ├─ consumer_pb2.py
│     │        │  │  ├─ consumer_pb2.pyi
│     │        │  │  ├─ context.proto
│     │        │  │  ├─ context_pb2.py
│     │        │  │  ├─ context_pb2.pyi
│     │        │  │  ├─ control.proto
│     │        │  │  ├─ control_pb2.py
│     │        │  │  ├─ control_pb2.pyi
│     │        │  │  ├─ distribution.proto
│     │        │  │  ├─ distribution_pb2.py
│     │        │  │  ├─ distribution_pb2.pyi
│     │        │  │  ├─ documentation.proto
│     │        │  │  ├─ documentation_pb2.py
│     │        │  │  ├─ documentation_pb2.pyi
│     │        │  │  ├─ endpoint.proto
│     │        │  │  ├─ endpoint_pb2.py
│     │        │  │  ├─ endpoint_pb2.pyi
│     │        │  │  ├─ error_reason.proto
│     │        │  │  ├─ error_reason_pb2.py
│     │        │  │  ├─ error_reason_pb2.pyi
│     │        │  │  ├─ field_behavior.proto
│     │        │  │  ├─ field_behavior_pb2.py
│     │        │  │  ├─ field_behavior_pb2.pyi
│     │        │  │  ├─ field_info.proto
│     │        │  │  ├─ field_info_pb2.py
│     │        │  │  ├─ field_info_pb2.pyi
│     │        │  │  ├─ http.proto
│     │        │  │  ├─ http_pb2.py
│     │        │  │  ├─ http_pb2.pyi
│     │        │  │  ├─ httpbody.proto
│     │        │  │  ├─ httpbody_pb2.py
│     │        │  │  ├─ httpbody_pb2.pyi
│     │        │  │  ├─ label.proto
│     │        │  │  ├─ label_pb2.py
│     │        │  │  ├─ label_pb2.pyi
│     │        │  │  ├─ launch_stage.proto
│     │        │  │  ├─ launch_stage_pb2.py
│     │        │  │  ├─ launch_stage_pb2.pyi
│     │        │  │  ├─ log.proto
│     │        │  │  ├─ log_pb2.py
│     │        │  │  ├─ log_pb2.pyi
│     │        │  │  ├─ logging.proto
│     │        │  │  ├─ logging_pb2.py
│     │        │  │  ├─ logging_pb2.pyi
│     │        │  │  ├─ metric.proto
│     │        │  │  ├─ metric_pb2.py
│     │        │  │  ├─ metric_pb2.pyi
│     │        │  │  ├─ monitored_resource.proto
│     │        │  │  ├─ monitored_resource_pb2.py
│     │        │  │  ├─ monitored_resource_pb2.pyi
│     │        │  │  ├─ monitoring.proto
│     │        │  │  ├─ monitoring_pb2.py
│     │        │  │  ├─ monitoring_pb2.pyi
│     │        │  │  ├─ policy.proto
│     │        │  │  ├─ policy_pb2.py
│     │        │  │  ├─ policy_pb2.pyi
│     │        │  │  ├─ quota.proto
│     │        │  │  ├─ quota_pb2.py
│     │        │  │  ├─ quota_pb2.pyi
│     │        │  │  ├─ resource.proto
│     │        │  │  ├─ resource_pb2.py
│     │        │  │  ├─ resource_pb2.pyi
│     │        │  │  ├─ routing.proto
│     │        │  │  ├─ routing_pb2.py
│     │        │  │  ├─ routing_pb2.pyi
│     │        │  │  ├─ service.proto
│     │        │  │  ├─ service_pb2.py
│     │        │  │  ├─ service_pb2.pyi
│     │        │  │  ├─ source_info.proto
│     │        │  │  ├─ source_info_pb2.py
│     │        │  │  ├─ source_info_pb2.pyi
│     │        │  │  ├─ system_parameter.proto
│     │        │  │  ├─ system_parameter_pb2.py
│     │        │  │  ├─ system_parameter_pb2.pyi
│     │        │  │  ├─ usage.proto
│     │        │  │  ├─ usage_pb2.py
│     │        │  │  ├─ usage_pb2.pyi
│     │        │  │  ├─ visibility.proto
│     │        │  │  ├─ visibility_pb2.py
│     │        │  │  └─ visibility_pb2.pyi
│     │        │  ├─ api_core
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _rest_streaming_base.cpython-313.pyc
│     │        │  │  │  ├─ bidi.cpython-313.pyc
│     │        │  │  │  ├─ client_info.cpython-313.pyc
│     │        │  │  │  ├─ client_logging.cpython-313.pyc
│     │        │  │  │  ├─ client_options.cpython-313.pyc
│     │        │  │  │  ├─ datetime_helpers.cpython-313.pyc
│     │        │  │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  │  ├─ extended_operation.cpython-313.pyc
│     │        │  │  │  ├─ general_helpers.cpython-313.pyc
│     │        │  │  │  ├─ grpc_helpers.cpython-313.pyc
│     │        │  │  │  ├─ grpc_helpers_async.cpython-313.pyc
│     │        │  │  │  ├─ iam.cpython-313.pyc
│     │        │  │  │  ├─ operation.cpython-313.pyc
│     │        │  │  │  ├─ operation_async.cpython-313.pyc
│     │        │  │  │  ├─ page_iterator.cpython-313.pyc
│     │        │  │  │  ├─ page_iterator_async.cpython-313.pyc
│     │        │  │  │  ├─ path_template.cpython-313.pyc
│     │        │  │  │  ├─ protobuf_helpers.cpython-313.pyc
│     │        │  │  │  ├─ rest_helpers.cpython-313.pyc
│     │        │  │  │  ├─ rest_streaming.cpython-313.pyc
│     │        │  │  │  ├─ rest_streaming_async.cpython-313.pyc
│     │        │  │  │  ├─ retry_async.cpython-313.pyc
│     │        │  │  │  ├─ timeout.cpython-313.pyc
│     │        │  │  │  ├─ universe.cpython-313.pyc
│     │        │  │  │  ├─ version.cpython-313.pyc
│     │        │  │  │  └─ version_header.cpython-313.pyc
│     │        │  │  ├─ _rest_streaming_base.py
│     │        │  │  ├─ bidi.py
│     │        │  │  ├─ client_info.py
│     │        │  │  ├─ client_logging.py
│     │        │  │  ├─ client_options.py
│     │        │  │  ├─ datetime_helpers.py
│     │        │  │  ├─ exceptions.py
│     │        │  │  ├─ extended_operation.py
│     │        │  │  ├─ future
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _helpers.cpython-313.pyc
│     │        │  │  │  │  ├─ async_future.cpython-313.pyc
│     │        │  │  │  │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  └─ polling.cpython-313.pyc
│     │        │  │  │  ├─ _helpers.py
│     │        │  │  │  ├─ async_future.py
│     │        │  │  │  ├─ base.py
│     │        │  │  │  └─ polling.py
│     │        │  │  ├─ gapic_v1
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ client_info.cpython-313.pyc
│     │        │  │  │  │  ├─ config.cpython-313.pyc
│     │        │  │  │  │  ├─ config_async.cpython-313.pyc
│     │        │  │  │  │  ├─ method.cpython-313.pyc
│     │        │  │  │  │  ├─ method_async.cpython-313.pyc
│     │        │  │  │  │  └─ routing_header.cpython-313.pyc
│     │        │  │  │  ├─ client_info.py
│     │        │  │  │  ├─ config.py
│     │        │  │  │  ├─ config_async.py
│     │        │  │  │  ├─ method.py
│     │        │  │  │  ├─ method_async.py
│     │        │  │  │  └─ routing_header.py
│     │        │  │  ├─ general_helpers.py
│     │        │  │  ├─ grpc_helpers.py
│     │        │  │  ├─ grpc_helpers_async.py
│     │        │  │  ├─ iam.py
│     │        │  │  ├─ operation.py
│     │        │  │  ├─ operation_async.py
│     │        │  │  ├─ operations_v1
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ abstract_operations_base_client.cpython-313.pyc
│     │        │  │  │  │  ├─ abstract_operations_client.cpython-313.pyc
│     │        │  │  │  │  ├─ operations_async_client.cpython-313.pyc
│     │        │  │  │  │  ├─ operations_client.cpython-313.pyc
│     │        │  │  │  │  ├─ operations_client_config.cpython-313.pyc
│     │        │  │  │  │  ├─ operations_rest_client_async.cpython-313.pyc
│     │        │  │  │  │  ├─ pagers.cpython-313.pyc
│     │        │  │  │  │  ├─ pagers_async.cpython-313.pyc
│     │        │  │  │  │  └─ pagers_base.cpython-313.pyc
│     │        │  │  │  ├─ abstract_operations_base_client.py
│     │        │  │  │  ├─ abstract_operations_client.py
│     │        │  │  │  ├─ operations_async_client.py
│     │        │  │  │  ├─ operations_client.py
│     │        │  │  │  ├─ operations_client_config.py
│     │        │  │  │  ├─ operations_rest_client_async.py
│     │        │  │  │  ├─ pagers.py
│     │        │  │  │  ├─ pagers_async.py
│     │        │  │  │  ├─ pagers_base.py
│     │        │  │  │  └─ transports
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │     │  ├─ rest.cpython-313.pyc
│     │        │  │  │     │  └─ rest_asyncio.cpython-313.pyc
│     │        │  │  │     ├─ base.py
│     │        │  │  │     ├─ rest.py
│     │        │  │  │     └─ rest_asyncio.py
│     │        │  │  ├─ page_iterator.py
│     │        │  │  ├─ page_iterator_async.py
│     │        │  │  ├─ path_template.py
│     │        │  │  ├─ protobuf_helpers.py
│     │        │  │  ├─ py.typed
│     │        │  │  ├─ rest_helpers.py
│     │        │  │  ├─ rest_streaming.py
│     │        │  │  ├─ rest_streaming_async.py
│     │        │  │  ├─ retry
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ retry_base.cpython-313.pyc
│     │        │  │  │  │  ├─ retry_streaming.cpython-313.pyc
│     │        │  │  │  │  ├─ retry_streaming_async.cpython-313.pyc
│     │        │  │  │  │  ├─ retry_unary.cpython-313.pyc
│     │        │  │  │  │  └─ retry_unary_async.cpython-313.pyc
│     │        │  │  │  ├─ retry_base.py
│     │        │  │  │  ├─ retry_streaming.py
│     │        │  │  │  ├─ retry_streaming_async.py
│     │        │  │  │  ├─ retry_unary.py
│     │        │  │  │  └─ retry_unary_async.py
│     │        │  │  ├─ retry_async.py
│     │        │  │  ├─ timeout.py
│     │        │  │  ├─ universe.py
│     │        │  │  ├─ version.py
│     │        │  │  └─ version_header.py
│     │        │  ├─ auth
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _cloud_sdk.cpython-313.pyc
│     │        │  │  │  ├─ _credentials_async.cpython-313.pyc
│     │        │  │  │  ├─ _credentials_base.cpython-313.pyc
│     │        │  │  │  ├─ _default.cpython-313.pyc
│     │        │  │  │  ├─ _default_async.cpython-313.pyc
│     │        │  │  │  ├─ _exponential_backoff.cpython-313.pyc
│     │        │  │  │  ├─ _helpers.cpython-313.pyc
│     │        │  │  │  ├─ _jwt_async.cpython-313.pyc
│     │        │  │  │  ├─ _oauth2client.cpython-313.pyc
│     │        │  │  │  ├─ _refresh_worker.cpython-313.pyc
│     │        │  │  │  ├─ _service_account_info.cpython-313.pyc
│     │        │  │  │  ├─ api_key.cpython-313.pyc
│     │        │  │  │  ├─ app_engine.cpython-313.pyc
│     │        │  │  │  ├─ aws.cpython-313.pyc
│     │        │  │  │  ├─ credentials.cpython-313.pyc
│     │        │  │  │  ├─ downscoped.cpython-313.pyc
│     │        │  │  │  ├─ environment_vars.cpython-313.pyc
│     │        │  │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  │  ├─ external_account.cpython-313.pyc
│     │        │  │  │  ├─ external_account_authorized_user.cpython-313.pyc
│     │        │  │  │  ├─ iam.cpython-313.pyc
│     │        │  │  │  ├─ identity_pool.cpython-313.pyc
│     │        │  │  │  ├─ impersonated_credentials.cpython-313.pyc
│     │        │  │  │  ├─ jwt.cpython-313.pyc
│     │        │  │  │  ├─ metrics.cpython-313.pyc
│     │        │  │  │  ├─ pluggable.cpython-313.pyc
│     │        │  │  │  └─ version.cpython-313.pyc
│     │        │  │  ├─ _cloud_sdk.py
│     │        │  │  ├─ _credentials_async.py
│     │        │  │  ├─ _credentials_base.py
│     │        │  │  ├─ _default.py
│     │        │  │  ├─ _default_async.py
│     │        │  │  ├─ _exponential_backoff.py
│     │        │  │  ├─ _helpers.py
│     │        │  │  ├─ _jwt_async.py
│     │        │  │  ├─ _oauth2client.py
│     │        │  │  ├─ _refresh_worker.py
│     │        │  │  ├─ _service_account_info.py
│     │        │  │  ├─ aio
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _helpers.cpython-313.pyc
│     │        │  │  │  │  └─ credentials.cpython-313.pyc
│     │        │  │  │  ├─ _helpers.py
│     │        │  │  │  ├─ credentials.py
│     │        │  │  │  └─ transport
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ aiohttp.cpython-313.pyc
│     │        │  │  │     │  └─ sessions.cpython-313.pyc
│     │        │  │  │     ├─ aiohttp.py
│     │        │  │  │     └─ sessions.py
│     │        │  │  ├─ api_key.py
│     │        │  │  ├─ app_engine.py
│     │        │  │  ├─ aws.py
│     │        │  │  ├─ compute_engine
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _metadata.cpython-313.pyc
│     │        │  │  │  │  └─ credentials.cpython-313.pyc
│     │        │  │  │  ├─ _metadata.py
│     │        │  │  │  └─ credentials.py
│     │        │  │  ├─ credentials.py
│     │        │  │  ├─ crypt
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _cryptography_rsa.cpython-313.pyc
│     │        │  │  │  │  ├─ _helpers.cpython-313.pyc
│     │        │  │  │  │  ├─ _python_rsa.cpython-313.pyc
│     │        │  │  │  │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  ├─ es256.cpython-313.pyc
│     │        │  │  │  │  └─ rsa.cpython-313.pyc
│     │        │  │  │  ├─ _cryptography_rsa.py
│     │        │  │  │  ├─ _helpers.py
│     │        │  │  │  ├─ _python_rsa.py
│     │        │  │  │  ├─ base.py
│     │        │  │  │  ├─ es256.py
│     │        │  │  │  └─ rsa.py
│     │        │  │  ├─ downscoped.py
│     │        │  │  ├─ environment_vars.py
│     │        │  │  ├─ exceptions.py
│     │        │  │  ├─ external_account.py
│     │        │  │  ├─ external_account_authorized_user.py
│     │        │  │  ├─ iam.py
│     │        │  │  ├─ identity_pool.py
│     │        │  │  ├─ impersonated_credentials.py
│     │        │  │  ├─ jwt.py
│     │        │  │  ├─ metrics.py
│     │        │  │  ├─ pluggable.py
│     │        │  │  ├─ py.typed
│     │        │  │  ├─ transport
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _aiohttp_requests.cpython-313.pyc
│     │        │  │  │  │  ├─ _custom_tls_signer.cpython-313.pyc
│     │        │  │  │  │  ├─ _http_client.cpython-313.pyc
│     │        │  │  │  │  ├─ _mtls_helper.cpython-313.pyc
│     │        │  │  │  │  ├─ _requests_base.cpython-313.pyc
│     │        │  │  │  │  ├─ grpc.cpython-313.pyc
│     │        │  │  │  │  ├─ mtls.cpython-313.pyc
│     │        │  │  │  │  ├─ requests.cpython-313.pyc
│     │        │  │  │  │  └─ urllib3.cpython-313.pyc
│     │        │  │  │  ├─ _aiohttp_requests.py
│     │        │  │  │  ├─ _custom_tls_signer.py
│     │        │  │  │  ├─ _http_client.py
│     │        │  │  │  ├─ _mtls_helper.py
│     │        │  │  │  ├─ _requests_base.py
│     │        │  │  │  ├─ grpc.py
│     │        │  │  │  ├─ mtls.py
│     │        │  │  │  ├─ requests.py
│     │        │  │  │  └─ urllib3.py
│     │        │  │  └─ version.py
│     │        │  ├─ cloud
│     │        │  │  ├─ __pycache__
│     │        │  │  │  └─ extended_operations_pb2.cpython-313.pyc
│     │        │  │  ├─ extended_operations.proto
│     │        │  │  ├─ extended_operations_pb2.py
│     │        │  │  ├─ extended_operations_pb2.pyi
│     │        │  │  └─ location
│     │        │  │     ├─ __pycache__
│     │        │  │     │  └─ locations_pb2.cpython-313.pyc
│     │        │  │     ├─ locations.proto
│     │        │  │     ├─ locations_pb2.py
│     │        │  │     └─ locations_pb2.pyi
│     │        │  ├─ gapic
│     │        │  │  └─ metadata
│     │        │  │     ├─ __pycache__
│     │        │  │     │  └─ gapic_metadata_pb2.cpython-313.pyc
│     │        │  │     ├─ gapic_metadata.proto
│     │        │  │     ├─ gapic_metadata_pb2.py
│     │        │  │     └─ gapic_metadata_pb2.pyi
│     │        │  ├─ generativeai
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ answer.cpython-313.pyc
│     │        │  │  │  ├─ caching.cpython-313.pyc
│     │        │  │  │  ├─ client.cpython-313.pyc
│     │        │  │  │  ├─ embedding.cpython-313.pyc
│     │        │  │  │  ├─ files.cpython-313.pyc
│     │        │  │  │  ├─ generative_models.cpython-313.pyc
│     │        │  │  │  ├─ models.cpython-313.pyc
│     │        │  │  │  ├─ operations.cpython-313.pyc
│     │        │  │  │  ├─ permission.cpython-313.pyc
│     │        │  │  │  ├─ protos.cpython-313.pyc
│     │        │  │  │  ├─ responder.cpython-313.pyc
│     │        │  │  │  ├─ retriever.cpython-313.pyc
│     │        │  │  │  ├─ string_utils.cpython-313.pyc
│     │        │  │  │  ├─ utils.cpython-313.pyc
│     │        │  │  │  └─ version.cpython-313.pyc
│     │        │  │  ├─ answer.py
│     │        │  │  ├─ audio_models
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ _audio_models.cpython-313.pyc
│     │        │  │  │  └─ _audio_models.py
│     │        │  │  ├─ caching.py
│     │        │  │  ├─ client.py
│     │        │  │  ├─ embedding.py
│     │        │  │  ├─ files.py
│     │        │  │  ├─ generative_models.py
│     │        │  │  ├─ models.py
│     │        │  │  ├─ notebook
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ argument_parser.cpython-313.pyc
│     │        │  │  │  │  ├─ cmd_line_parser.cpython-313.pyc
│     │        │  │  │  │  ├─ command.cpython-313.pyc
│     │        │  │  │  │  ├─ command_utils.cpython-313.pyc
│     │        │  │  │  │  ├─ compare_cmd.cpython-313.pyc
│     │        │  │  │  │  ├─ compile_cmd.cpython-313.pyc
│     │        │  │  │  │  ├─ eval_cmd.cpython-313.pyc
│     │        │  │  │  │  ├─ flag_def.cpython-313.pyc
│     │        │  │  │  │  ├─ gspread_client.cpython-313.pyc
│     │        │  │  │  │  ├─ html_utils.cpython-313.pyc
│     │        │  │  │  │  ├─ input_utils.cpython-313.pyc
│     │        │  │  │  │  ├─ ipython_env.cpython-313.pyc
│     │        │  │  │  │  ├─ ipython_env_impl.cpython-313.pyc
│     │        │  │  │  │  ├─ magics.cpython-313.pyc
│     │        │  │  │  │  ├─ magics_engine.cpython-313.pyc
│     │        │  │  │  │  ├─ model_registry.cpython-313.pyc
│     │        │  │  │  │  ├─ output_utils.cpython-313.pyc
│     │        │  │  │  │  ├─ parsed_args_lib.cpython-313.pyc
│     │        │  │  │  │  ├─ post_process_utils.cpython-313.pyc
│     │        │  │  │  │  ├─ post_process_utils_test_helper.cpython-313.pyc
│     │        │  │  │  │  ├─ py_utils.cpython-313.pyc
│     │        │  │  │  │  ├─ run_cmd.cpython-313.pyc
│     │        │  │  │  │  ├─ sheets_id.cpython-313.pyc
│     │        │  │  │  │  ├─ sheets_sanitize_url.cpython-313.pyc
│     │        │  │  │  │  ├─ sheets_utils.cpython-313.pyc
│     │        │  │  │  │  └─ text_model.cpython-313.pyc
│     │        │  │  │  ├─ argument_parser.py
│     │        │  │  │  ├─ cmd_line_parser.py
│     │        │  │  │  ├─ command.py
│     │        │  │  │  ├─ command_utils.py
│     │        │  │  │  ├─ compare_cmd.py
│     │        │  │  │  ├─ compile_cmd.py
│     │        │  │  │  ├─ eval_cmd.py
│     │        │  │  │  ├─ flag_def.py
│     │        │  │  │  ├─ gspread_client.py
│     │        │  │  │  ├─ html_utils.py
│     │        │  │  │  ├─ input_utils.py
│     │        │  │  │  ├─ ipython_env.py
│     │        │  │  │  ├─ ipython_env_impl.py
│     │        │  │  │  ├─ lib
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ llm_function.cpython-313.pyc
│     │        │  │  │  │  │  ├─ llmfn_input_utils.cpython-313.pyc
│     │        │  │  │  │  │  ├─ llmfn_inputs_source.cpython-313.pyc
│     │        │  │  │  │  │  ├─ llmfn_output_row.cpython-313.pyc
│     │        │  │  │  │  │  ├─ llmfn_outputs.cpython-313.pyc
│     │        │  │  │  │  │  ├─ llmfn_post_process.cpython-313.pyc
│     │        │  │  │  │  │  ├─ llmfn_post_process_cmds.cpython-313.pyc
│     │        │  │  │  │  │  ├─ model.cpython-313.pyc
│     │        │  │  │  │  │  ├─ prompt_utils.cpython-313.pyc
│     │        │  │  │  │  │  └─ unique_fn.cpython-313.pyc
│     │        │  │  │  │  ├─ llm_function.py
│     │        │  │  │  │  ├─ llmfn_input_utils.py
│     │        │  │  │  │  ├─ llmfn_inputs_source.py
│     │        │  │  │  │  ├─ llmfn_output_row.py
│     │        │  │  │  │  ├─ llmfn_outputs.py
│     │        │  │  │  │  ├─ llmfn_post_process.py
│     │        │  │  │  │  ├─ llmfn_post_process_cmds.py
│     │        │  │  │  │  ├─ model.py
│     │        │  │  │  │  ├─ prompt_utils.py
│     │        │  │  │  │  └─ unique_fn.py
│     │        │  │  │  ├─ magics.py
│     │        │  │  │  ├─ magics_engine.py
│     │        │  │  │  ├─ model_registry.py
│     │        │  │  │  ├─ output_utils.py
│     │        │  │  │  ├─ parsed_args_lib.py
│     │        │  │  │  ├─ post_process_utils.py
│     │        │  │  │  ├─ post_process_utils_test_helper.py
│     │        │  │  │  ├─ py_utils.py
│     │        │  │  │  ├─ run_cmd.py
│     │        │  │  │  ├─ sheets_id.py
│     │        │  │  │  ├─ sheets_sanitize_url.py
│     │        │  │  │  ├─ sheets_utils.py
│     │        │  │  │  └─ text_model.py
│     │        │  │  ├─ operations.py
│     │        │  │  ├─ permission.py
│     │        │  │  ├─ protos.py
│     │        │  │  ├─ py.typed
│     │        │  │  ├─ responder.py
│     │        │  │  ├─ retriever.py
│     │        │  │  ├─ string_utils.py
│     │        │  │  ├─ types
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ answer_types.cpython-313.pyc
│     │        │  │  │  │  ├─ caching_types.cpython-313.pyc
│     │        │  │  │  │  ├─ citation_types.cpython-313.pyc
│     │        │  │  │  │  ├─ content_types.cpython-313.pyc
│     │        │  │  │  │  ├─ file_types.cpython-313.pyc
│     │        │  │  │  │  ├─ generation_types.cpython-313.pyc
│     │        │  │  │  │  ├─ helper_types.cpython-313.pyc
│     │        │  │  │  │  ├─ model_types.cpython-313.pyc
│     │        │  │  │  │  ├─ palm_safety_types.cpython-313.pyc
│     │        │  │  │  │  ├─ permission_types.cpython-313.pyc
│     │        │  │  │  │  ├─ retriever_types.cpython-313.pyc
│     │        │  │  │  │  ├─ safety_types.cpython-313.pyc
│     │        │  │  │  │  └─ text_types.cpython-313.pyc
│     │        │  │  │  ├─ answer_types.py
│     │        │  │  │  ├─ caching_types.py
│     │        │  │  │  ├─ citation_types.py
│     │        │  │  │  ├─ content_types.py
│     │        │  │  │  ├─ file_types.py
│     │        │  │  │  ├─ generation_types.py
│     │        │  │  │  ├─ helper_types.py
│     │        │  │  │  ├─ model_types.py
│     │        │  │  │  ├─ palm_safety_types.py
│     │        │  │  │  ├─ permission_types.py
│     │        │  │  │  ├─ retriever_types.py
│     │        │  │  │  ├─ safety_types.py
│     │        │  │  │  └─ text_types.py
│     │        │  │  ├─ utils.py
│     │        │  │  └─ version.py
│     │        │  ├─ logging
│     │        │  │  └─ type
│     │        │  │     ├─ __pycache__
│     │        │  │     │  ├─ http_request_pb2.cpython-313.pyc
│     │        │  │     │  └─ log_severity_pb2.cpython-313.pyc
│     │        │  │     ├─ http_request.proto
│     │        │  │     ├─ http_request_pb2.py
│     │        │  │     ├─ http_request_pb2.pyi
│     │        │  │     ├─ log_severity.proto
│     │        │  │     ├─ log_severity_pb2.py
│     │        │  │     └─ log_severity_pb2.pyi
│     │        │  ├─ longrunning
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ operations_grpc.cpython-313.pyc
│     │        │  │  │  ├─ operations_grpc_pb2.cpython-313.pyc
│     │        │  │  │  ├─ operations_pb2.cpython-313.pyc
│     │        │  │  │  ├─ operations_pb2_grpc.cpython-313.pyc
│     │        │  │  │  ├─ operations_proto.cpython-313.pyc
│     │        │  │  │  └─ operations_proto_pb2.cpython-313.pyc
│     │        │  │  ├─ operations_grpc.py
│     │        │  │  ├─ operations_grpc_pb2.py
│     │        │  │  ├─ operations_pb2.py
│     │        │  │  ├─ operations_pb2_grpc.py
│     │        │  │  ├─ operations_proto.proto
│     │        │  │  ├─ operations_proto.py
│     │        │  │  ├─ operations_proto_pb2.py
│     │        │  │  └─ operations_proto_pb2.pyi
│     │        │  ├─ oauth2
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _client.cpython-313.pyc
│     │        │  │  │  ├─ _client_async.cpython-313.pyc
│     │        │  │  │  ├─ _credentials_async.cpython-313.pyc
│     │        │  │  │  ├─ _id_token_async.cpython-313.pyc
│     │        │  │  │  ├─ _reauth_async.cpython-313.pyc
│     │        │  │  │  ├─ _service_account_async.cpython-313.pyc
│     │        │  │  │  ├─ challenges.cpython-313.pyc
│     │        │  │  │  ├─ credentials.cpython-313.pyc
│     │        │  │  │  ├─ gdch_credentials.cpython-313.pyc
│     │        │  │  │  ├─ id_token.cpython-313.pyc
│     │        │  │  │  ├─ reauth.cpython-313.pyc
│     │        │  │  │  ├─ service_account.cpython-313.pyc
│     │        │  │  │  ├─ sts.cpython-313.pyc
│     │        │  │  │  ├─ utils.cpython-313.pyc
│     │        │  │  │  ├─ webauthn_handler.cpython-313.pyc
│     │        │  │  │  ├─ webauthn_handler_factory.cpython-313.pyc
│     │        │  │  │  └─ webauthn_types.cpython-313.pyc
│     │        │  │  ├─ _client.py
│     │        │  │  ├─ _client_async.py
│     │        │  │  ├─ _credentials_async.py
│     │        │  │  ├─ _id_token_async.py
│     │        │  │  ├─ _reauth_async.py
│     │        │  │  ├─ _service_account_async.py
│     │        │  │  ├─ challenges.py
│     │        │  │  ├─ credentials.py
│     │        │  │  ├─ gdch_credentials.py
│     │        │  │  ├─ id_token.py
│     │        │  │  ├─ py.typed
│     │        │  │  ├─ reauth.py
│     │        │  │  ├─ service_account.py
│     │        │  │  ├─ sts.py
│     │        │  │  ├─ utils.py
│     │        │  │  ├─ webauthn_handler.py
│     │        │  │  ├─ webauthn_handler_factory.py
│     │        │  │  └─ webauthn_types.py
│     │        │  ├─ protobuf
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ any.cpython-313.pyc
│     │        │  │  │  ├─ any_pb2.cpython-313.pyc
│     │        │  │  │  ├─ api_pb2.cpython-313.pyc
│     │        │  │  │  ├─ descriptor.cpython-313.pyc
│     │        │  │  │  ├─ descriptor_database.cpython-313.pyc
│     │        │  │  │  ├─ descriptor_pb2.cpython-313.pyc
│     │        │  │  │  ├─ descriptor_pool.cpython-313.pyc
│     │        │  │  │  ├─ duration.cpython-313.pyc
│     │        │  │  │  ├─ duration_pb2.cpython-313.pyc
│     │        │  │  │  ├─ empty_pb2.cpython-313.pyc
│     │        │  │  │  ├─ field_mask_pb2.cpython-313.pyc
│     │        │  │  │  ├─ json_format.cpython-313.pyc
│     │        │  │  │  ├─ message.cpython-313.pyc
│     │        │  │  │  ├─ message_factory.cpython-313.pyc
│     │        │  │  │  ├─ proto.cpython-313.pyc
│     │        │  │  │  ├─ proto_builder.cpython-313.pyc
│     │        │  │  │  ├─ proto_json.cpython-313.pyc
│     │        │  │  │  ├─ reflection.cpython-313.pyc
│     │        │  │  │  ├─ runtime_version.cpython-313.pyc
│     │        │  │  │  ├─ service.cpython-313.pyc
│     │        │  │  │  ├─ service_reflection.cpython-313.pyc
│     │        │  │  │  ├─ source_context_pb2.cpython-313.pyc
│     │        │  │  │  ├─ struct_pb2.cpython-313.pyc
│     │        │  │  │  ├─ symbol_database.cpython-313.pyc
│     │        │  │  │  ├─ text_encoding.cpython-313.pyc
│     │        │  │  │  ├─ text_format.cpython-313.pyc
│     │        │  │  │  ├─ timestamp.cpython-313.pyc
│     │        │  │  │  ├─ timestamp_pb2.cpython-313.pyc
│     │        │  │  │  ├─ type_pb2.cpython-313.pyc
│     │        │  │  │  ├─ unknown_fields.cpython-313.pyc
│     │        │  │  │  └─ wrappers_pb2.cpython-313.pyc
│     │        │  │  ├─ any.py
│     │        │  │  ├─ any_pb2.py
│     │        │  │  ├─ api_pb2.py
│     │        │  │  ├─ compiler
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ plugin_pb2.cpython-313.pyc
│     │        │  │  │  └─ plugin_pb2.py
│     │        │  │  ├─ descriptor.py
│     │        │  │  ├─ descriptor_database.py
│     │        │  │  ├─ descriptor_pb2.py
│     │        │  │  ├─ descriptor_pool.py
│     │        │  │  ├─ duration.py
│     │        │  │  ├─ duration_pb2.py
│     │        │  │  ├─ empty_pb2.py
│     │        │  │  ├─ field_mask_pb2.py
│     │        │  │  ├─ internal
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _parameterized.cpython-313.pyc
│     │        │  │  │  │  ├─ api_implementation.cpython-313.pyc
│     │        │  │  │  │  ├─ builder.cpython-313.pyc
│     │        │  │  │  │  ├─ containers.cpython-313.pyc
│     │        │  │  │  │  ├─ decoder.cpython-313.pyc
│     │        │  │  │  │  ├─ encoder.cpython-313.pyc
│     │        │  │  │  │  ├─ enum_type_wrapper.cpython-313.pyc
│     │        │  │  │  │  ├─ extension_dict.cpython-313.pyc
│     │        │  │  │  │  ├─ field_mask.cpython-313.pyc
│     │        │  │  │  │  ├─ message_listener.cpython-313.pyc
│     │        │  │  │  │  ├─ python_edition_defaults.cpython-313.pyc
│     │        │  │  │  │  ├─ python_message.cpython-313.pyc
│     │        │  │  │  │  ├─ testing_refleaks.cpython-313.pyc
│     │        │  │  │  │  ├─ type_checkers.cpython-313.pyc
│     │        │  │  │  │  ├─ well_known_types.cpython-313.pyc
│     │        │  │  │  │  └─ wire_format.cpython-313.pyc
│     │        │  │  │  ├─ _parameterized.py
│     │        │  │  │  ├─ api_implementation.py
│     │        │  │  │  ├─ builder.py
│     │        │  │  │  ├─ containers.py
│     │        │  │  │  ├─ decoder.py
│     │        │  │  │  ├─ encoder.py
│     │        │  │  │  ├─ enum_type_wrapper.py
│     │        │  │  │  ├─ extension_dict.py
│     │        │  │  │  ├─ field_mask.py
│     │        │  │  │  ├─ message_listener.py
│     │        │  │  │  ├─ python_edition_defaults.py
│     │        │  │  │  ├─ python_message.py
│     │        │  │  │  ├─ testing_refleaks.py
│     │        │  │  │  ├─ type_checkers.py
│     │        │  │  │  ├─ well_known_types.py
│     │        │  │  │  └─ wire_format.py
│     │        │  │  ├─ json_format.py
│     │        │  │  ├─ message.py
│     │        │  │  ├─ message_factory.py
│     │        │  │  ├─ proto.py
│     │        │  │  ├─ proto_builder.py
│     │        │  │  ├─ proto_json.py
│     │        │  │  ├─ pyext
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ cpp_message.cpython-313.pyc
│     │        │  │  │  └─ cpp_message.py
│     │        │  │  ├─ reflection.py
│     │        │  │  ├─ runtime_version.py
│     │        │  │  ├─ service.py
│     │        │  │  ├─ service_reflection.py
│     │        │  │  ├─ source_context_pb2.py
│     │        │  │  ├─ struct_pb2.py
│     │        │  │  ├─ symbol_database.py
│     │        │  │  ├─ testdata
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  └─ __pycache__
│     │        │  │  │     └─ __init__.cpython-313.pyc
│     │        │  │  ├─ text_encoding.py
│     │        │  │  ├─ text_format.py
│     │        │  │  ├─ timestamp.py
│     │        │  │  ├─ timestamp_pb2.py
│     │        │  │  ├─ type_pb2.py
│     │        │  │  ├─ unknown_fields.py
│     │        │  │  ├─ util
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  └─ __pycache__
│     │        │  │  │     └─ __init__.cpython-313.pyc
│     │        │  │  └─ wrappers_pb2.py
│     │        │  ├─ rpc
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ code_pb2.cpython-313.pyc
│     │        │  │  │  ├─ error_details_pb2.cpython-313.pyc
│     │        │  │  │  ├─ http_pb2.cpython-313.pyc
│     │        │  │  │  └─ status_pb2.cpython-313.pyc
│     │        │  │  ├─ code.proto
│     │        │  │  ├─ code_pb2.py
│     │        │  │  ├─ code_pb2.pyi
│     │        │  │  ├─ context
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ attribute_context_pb2.cpython-313.pyc
│     │        │  │  │  │  └─ audit_context_pb2.cpython-313.pyc
│     │        │  │  │  ├─ attribute_context.proto
│     │        │  │  │  ├─ attribute_context_pb2.py
│     │        │  │  │  ├─ attribute_context_pb2.pyi
│     │        │  │  │  ├─ audit_context.proto
│     │        │  │  │  ├─ audit_context_pb2.py
│     │        │  │  │  └─ audit_context_pb2.pyi
│     │        │  │  ├─ error_details.proto
│     │        │  │  ├─ error_details_pb2.py
│     │        │  │  ├─ error_details_pb2.pyi
│     │        │  │  ├─ http.proto
│     │        │  │  ├─ http_pb2.py
│     │        │  │  ├─ http_pb2.pyi
│     │        │  │  ├─ status.proto
│     │        │  │  ├─ status_pb2.py
│     │        │  │  └─ status_pb2.pyi
│     │        │  └─ type
│     │        │     ├─ __pycache__
│     │        │     │  ├─ calendar_period_pb2.cpython-313.pyc
│     │        │     │  ├─ color_pb2.cpython-313.pyc
│     │        │     │  ├─ date_pb2.cpython-313.pyc
│     │        │     │  ├─ datetime_pb2.cpython-313.pyc
│     │        │     │  ├─ dayofweek_pb2.cpython-313.pyc
│     │        │     │  ├─ decimal_pb2.cpython-313.pyc
│     │        │     │  ├─ expr_pb2.cpython-313.pyc
│     │        │     │  ├─ fraction_pb2.cpython-313.pyc
│     │        │     │  ├─ interval_pb2.cpython-313.pyc
│     │        │     │  ├─ latlng_pb2.cpython-313.pyc
│     │        │     │  ├─ localized_text_pb2.cpython-313.pyc
│     │        │     │  ├─ money_pb2.cpython-313.pyc
│     │        │     │  ├─ month_pb2.cpython-313.pyc
│     │        │     │  ├─ phone_number_pb2.cpython-313.pyc
│     │        │     │  ├─ postal_address_pb2.cpython-313.pyc
│     │        │     │  ├─ quaternion_pb2.cpython-313.pyc
│     │        │     │  └─ timeofday_pb2.cpython-313.pyc
│     │        │     ├─ calendar_period.proto
│     │        │     ├─ calendar_period_pb2.py
│     │        │     ├─ calendar_period_pb2.pyi
│     │        │     ├─ color.proto
│     │        │     ├─ color_pb2.py
│     │        │     ├─ color_pb2.pyi
│     │        │     ├─ date.proto
│     │        │     ├─ date_pb2.py
│     │        │     ├─ date_pb2.pyi
│     │        │     ├─ datetime.proto
│     │        │     ├─ datetime_pb2.py
│     │        │     ├─ datetime_pb2.pyi
│     │        │     ├─ dayofweek.proto
│     │        │     ├─ dayofweek_pb2.py
│     │        │     ├─ dayofweek_pb2.pyi
│     │        │     ├─ decimal.proto
│     │        │     ├─ decimal_pb2.py
│     │        │     ├─ decimal_pb2.pyi
│     │        │     ├─ expr.proto
│     │        │     ├─ expr_pb2.py
│     │        │     ├─ expr_pb2.pyi
│     │        │     ├─ fraction.proto
│     │        │     ├─ fraction_pb2.py
│     │        │     ├─ fraction_pb2.pyi
│     │        │     ├─ interval.proto
│     │        │     ├─ interval_pb2.py
│     │        │     ├─ interval_pb2.pyi
│     │        │     ├─ latlng.proto
│     │        │     ├─ latlng_pb2.py
│     │        │     ├─ latlng_pb2.pyi
│     │        │     ├─ localized_text.proto
│     │        │     ├─ localized_text_pb2.py
│     │        │     ├─ localized_text_pb2.pyi
│     │        │     ├─ money.proto
│     │        │     ├─ money_pb2.py
│     │        │     ├─ money_pb2.pyi
│     │        │     ├─ month.proto
│     │        │     ├─ month_pb2.py
│     │        │     ├─ month_pb2.pyi
│     │        │     ├─ phone_number.proto
│     │        │     ├─ phone_number_pb2.py
│     │        │     ├─ phone_number_pb2.pyi
│     │        │     ├─ postal_address.proto
│     │        │     ├─ postal_address_pb2.py
│     │        │     ├─ postal_address_pb2.pyi
│     │        │     ├─ quaternion.proto
│     │        │     ├─ quaternion_pb2.py
│     │        │     ├─ quaternion_pb2.pyi
│     │        │     ├─ timeofday.proto
│     │        │     ├─ timeofday_pb2.py
│     │        │     └─ timeofday_pb2.pyi
│     │        ├─ google_ai_generativelanguage-0.6.15.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ top_level.txt
│     │        ├─ google_api_core-2.25.2.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ google_api_python_client-2.184.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ google_auth-2.41.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ google_auth_httplib2-0.2.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ top_level.txt
│     │        ├─ google_auth_httplib2.py
│     │        ├─ google_generativeai-0.8.5-py3.13-nspkg.pth
│     │        ├─ google_generativeai-0.8.5.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ REQUESTED
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  ├─ namespace_packages.txt
│     │        │  └─ top_level.txt
│     │        ├─ googleapiclient
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _auth.cpython-313.pyc
│     │        │  │  ├─ _helpers.cpython-313.pyc
│     │        │  │  ├─ channel.cpython-313.pyc
│     │        │  │  ├─ discovery.cpython-313.pyc
│     │        │  │  ├─ errors.cpython-313.pyc
│     │        │  │  ├─ http.cpython-313.pyc
│     │        │  │  ├─ mimeparse.cpython-313.pyc
│     │        │  │  ├─ model.cpython-313.pyc
│     │        │  │  ├─ sample_tools.cpython-313.pyc
│     │        │  │  ├─ schema.cpython-313.pyc
│     │        │  │  └─ version.cpython-313.pyc
│     │        │  ├─ _auth.py
│     │        │  ├─ _helpers.py
│     │        │  ├─ channel.py
│     │        │  ├─ discovery.py
│     │        │  ├─ discovery_cache
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ appengine_memcache.cpython-313.pyc
│     │        │  │  │  ├─ base.cpython-313.pyc
│     │        │  │  │  └─ file_cache.cpython-313.pyc
│     │        │  │  ├─ appengine_memcache.py
│     │        │  │  ├─ base.py
│     │        │  │  ├─ documents
│     │        │  │  │  ├─ abusiveexperiencereport.v1.json
│     │        │  │  │  ├─ acceleratedmobilepageurl.v1.json
│     │        │  │  │  ├─ accessapproval.v1.json
│     │        │  │  │  ├─ accesscontextmanager.v1.json
│     │        │  │  │  ├─ accesscontextmanager.v1beta.json
│     │        │  │  │  ├─ acmedns.v1.json
│     │        │  │  │  ├─ addressvalidation.v1.json
│     │        │  │  │  ├─ adexchangebuyer.v1.2.json
│     │        │  │  │  ├─ adexchangebuyer.v1.3.json
│     │        │  │  │  ├─ adexchangebuyer.v1.4.json
│     │        │  │  │  ├─ adexchangebuyer2.v2beta1.json
│     │        │  │  │  ├─ adexperiencereport.v1.json
│     │        │  │  │  ├─ admin.datatransfer_v1.json
│     │        │  │  │  ├─ admin.datatransferv1.json
│     │        │  │  │  ├─ admin.directory_v1.json
│     │        │  │  │  ├─ admin.directoryv1.json
│     │        │  │  │  ├─ admin.reports_v1.json
│     │        │  │  │  ├─ admin.reportsv1.json
│     │        │  │  │  ├─ admob.v1.json
│     │        │  │  │  ├─ admob.v1beta.json
│     │        │  │  │  ├─ adsense.v2.json
│     │        │  │  │  ├─ adsensehost.v4.1.json
│     │        │  │  │  ├─ adsenseplatform.v1.json
│     │        │  │  │  ├─ adsenseplatform.v1alpha.json
│     │        │  │  │  ├─ advisorynotifications.v1.json
│     │        │  │  │  ├─ aiplatform.v1.json
│     │        │  │  │  ├─ aiplatform.v1beta1.json
│     │        │  │  │  ├─ airquality.v1.json
│     │        │  │  │  ├─ alertcenter.v1beta1.json
│     │        │  │  │  ├─ alloydb.v1.json
│     │        │  │  │  ├─ alloydb.v1alpha.json
│     │        │  │  │  ├─ alloydb.v1beta.json
│     │        │  │  │  ├─ analytics.v3.json
│     │        │  │  │  ├─ analyticsadmin.v1alpha.json
│     │        │  │  │  ├─ analyticsadmin.v1beta.json
│     │        │  │  │  ├─ analyticsdata.v1alpha.json
│     │        │  │  │  ├─ analyticsdata.v1beta.json
│     │        │  │  │  ├─ analyticshub.v1.json
│     │        │  │  │  ├─ analyticshub.v1beta1.json
│     │        │  │  │  ├─ analyticsreporting.v4.json
│     │        │  │  │  ├─ androiddeviceprovisioning.v1.json
│     │        │  │  │  ├─ androidenterprise.v1.json
│     │        │  │  │  ├─ androidmanagement.v1.json
│     │        │  │  │  ├─ androidpublisher.v3.json
│     │        │  │  │  ├─ apigateway.v1.json
│     │        │  │  │  ├─ apigateway.v1beta.json
│     │        │  │  │  ├─ apigee.v1.json
│     │        │  │  │  ├─ apigeeregistry.v1.json
│     │        │  │  │  ├─ apihub.v1.json
│     │        │  │  │  ├─ apikeys.v2.json
│     │        │  │  │  ├─ apim.v1alpha.json
│     │        │  │  │  ├─ appengine.v1.json
│     │        │  │  │  ├─ appengine.v1alpha.json
│     │        │  │  │  ├─ appengine.v1beta.json
│     │        │  │  │  ├─ appengine.v1beta4.json
│     │        │  │  │  ├─ appengine.v1beta5.json
│     │        │  │  │  ├─ apphub.v1.json
│     │        │  │  │  ├─ apphub.v1alpha.json
│     │        │  │  │  ├─ area120tables.v1alpha1.json
│     │        │  │  │  ├─ areainsights.v1.json
│     │        │  │  │  ├─ artifactregistry.v1.json
│     │        │  │  │  ├─ artifactregistry.v1beta1.json
│     │        │  │  │  ├─ artifactregistry.v1beta2.json
│     │        │  │  │  ├─ assuredworkloads.v1.json
│     │        │  │  │  ├─ assuredworkloads.v1beta1.json
│     │        │  │  │  ├─ authorizedbuyersmarketplace.v1.json
│     │        │  │  │  ├─ authorizedbuyersmarketplace.v1alpha.json
│     │        │  │  │  ├─ authorizedbuyersmarketplace.v1beta.json
│     │        │  │  │  ├─ backupdr.v1.json
│     │        │  │  │  ├─ baremetalsolution.v1.json
│     │        │  │  │  ├─ baremetalsolution.v1alpha1.json
│     │        │  │  │  ├─ baremetalsolution.v2.json
│     │        │  │  │  ├─ batch.v1.json
│     │        │  │  │  ├─ beyondcorp.v1.json
│     │        │  │  │  ├─ beyondcorp.v1alpha.json
│     │        │  │  │  ├─ biglake.v1.json
│     │        │  │  │  ├─ bigquery.v2.json
│     │        │  │  │  ├─ bigqueryconnection.v1.json
│     │        │  │  │  ├─ bigqueryconnection.v1beta1.json
│     │        │  │  │  ├─ bigquerydatapolicy.v1.json
│     │        │  │  │  ├─ bigquerydatatransfer.v1.json
│     │        │  │  │  ├─ bigqueryreservation.v1.json
│     │        │  │  │  ├─ bigqueryreservation.v1alpha2.json
│     │        │  │  │  ├─ bigqueryreservation.v1beta1.json
│     │        │  │  │  ├─ bigtableadmin.v1.json
│     │        │  │  │  ├─ bigtableadmin.v2.json
│     │        │  │  │  ├─ billingbudgets.v1.json
│     │        │  │  │  ├─ billingbudgets.v1beta1.json
│     │        │  │  │  ├─ binaryauthorization.v1.json
│     │        │  │  │  ├─ binaryauthorization.v1beta1.json
│     │        │  │  │  ├─ blockchainnodeengine.v1.json
│     │        │  │  │  ├─ blogger.v2.json
│     │        │  │  │  ├─ blogger.v3.json
│     │        │  │  │  ├─ books.v1.json
│     │        │  │  │  ├─ businessprofileperformance.v1.json
│     │        │  │  │  ├─ calendar.v3.json
│     │        │  │  │  ├─ certificatemanager.v1.json
│     │        │  │  │  ├─ chat.v1.json
│     │        │  │  │  ├─ checks.v1alpha.json
│     │        │  │  │  ├─ chromemanagement.v1.json
│     │        │  │  │  ├─ chromepolicy.v1.json
│     │        │  │  │  ├─ chromeuxreport.v1.json
│     │        │  │  │  ├─ civicinfo.v2.json
│     │        │  │  │  ├─ classroom.v1.json
│     │        │  │  │  ├─ cloudasset.v1.json
│     │        │  │  │  ├─ cloudasset.v1beta1.json
│     │        │  │  │  ├─ cloudasset.v1p1beta1.json
│     │        │  │  │  ├─ cloudasset.v1p4beta1.json
│     │        │  │  │  ├─ cloudasset.v1p5beta1.json
│     │        │  │  │  ├─ cloudasset.v1p7beta1.json
│     │        │  │  │  ├─ cloudbilling.v1.json
│     │        │  │  │  ├─ cloudbilling.v1beta.json
│     │        │  │  │  ├─ cloudbuild.v1.json
│     │        │  │  │  ├─ cloudbuild.v1alpha1.json
│     │        │  │  │  ├─ cloudbuild.v1alpha2.json
│     │        │  │  │  ├─ cloudbuild.v1beta1.json
│     │        │  │  │  ├─ cloudbuild.v2.json
│     │        │  │  │  ├─ cloudchannel.v1.json
│     │        │  │  │  ├─ cloudcommerceprocurement.v1.json
│     │        │  │  │  ├─ cloudcontrolspartner.v1.json
│     │        │  │  │  ├─ cloudcontrolspartner.v1beta.json
│     │        │  │  │  ├─ clouddebugger.v2.json
│     │        │  │  │  ├─ clouddeploy.v1.json
│     │        │  │  │  ├─ clouderrorreporting.v1beta1.json
│     │        │  │  │  ├─ cloudfunctions.v1.json
│     │        │  │  │  ├─ cloudfunctions.v2.json
│     │        │  │  │  ├─ cloudfunctions.v2alpha.json
│     │        │  │  │  ├─ cloudfunctions.v2beta.json
│     │        │  │  │  ├─ cloudidentity.v1.json
│     │        │  │  │  ├─ cloudidentity.v1beta1.json
│     │        │  │  │  ├─ cloudiot.v1.json
│     │        │  │  │  ├─ cloudkms.v1.json
│     │        │  │  │  ├─ cloudlocationfinder.v1.json
│     │        │  │  │  ├─ cloudlocationfinder.v1alpha.json
│     │        │  │  │  ├─ cloudprofiler.v2.json
│     │        │  │  │  ├─ cloudresourcemanager.v1.json
│     │        │  │  │  ├─ cloudresourcemanager.v1beta1.json
│     │        │  │  │  ├─ cloudresourcemanager.v2.json
│     │        │  │  │  ├─ cloudresourcemanager.v2beta1.json
│     │        │  │  │  ├─ cloudresourcemanager.v3.json
│     │        │  │  │  ├─ cloudscheduler.v1.json
│     │        │  │  │  ├─ cloudscheduler.v1beta1.json
│     │        │  │  │  ├─ cloudsearch.v1.json
│     │        │  │  │  ├─ cloudshell.v1.json
│     │        │  │  │  ├─ cloudshell.v1alpha1.json
│     │        │  │  │  ├─ cloudsupport.v2.json
│     │        │  │  │  ├─ cloudsupport.v2beta.json
│     │        │  │  │  ├─ cloudtasks.v2.json
│     │        │  │  │  ├─ cloudtasks.v2beta2.json
│     │        │  │  │  ├─ cloudtasks.v2beta3.json
│     │        │  │  │  ├─ cloudtrace.v1.json
│     │        │  │  │  ├─ cloudtrace.v2.json
│     │        │  │  │  ├─ cloudtrace.v2beta1.json
│     │        │  │  │  ├─ composer.v1.json
│     │        │  │  │  ├─ composer.v1beta1.json
│     │        │  │  │  ├─ compute.alpha.json
│     │        │  │  │  ├─ compute.beta.json
│     │        │  │  │  ├─ compute.v1.json
│     │        │  │  │  ├─ config.v1.json
│     │        │  │  │  ├─ connectors.v1.json
│     │        │  │  │  ├─ connectors.v2.json
│     │        │  │  │  ├─ contactcenteraiplatform.v1alpha1.json
│     │        │  │  │  ├─ contactcenterinsights.v1.json
│     │        │  │  │  ├─ container.v1.json
│     │        │  │  │  ├─ container.v1beta1.json
│     │        │  │  │  ├─ containeranalysis.v1.json
│     │        │  │  │  ├─ containeranalysis.v1alpha1.json
│     │        │  │  │  ├─ containeranalysis.v1beta1.json
│     │        │  │  │  ├─ content.v2.1.json
│     │        │  │  │  ├─ content.v2.json
│     │        │  │  │  ├─ contentwarehouse.v1.json
│     │        │  │  │  ├─ css.v1.json
│     │        │  │  │  ├─ customsearch.v1.json
│     │        │  │  │  ├─ datacatalog.v1.json
│     │        │  │  │  ├─ datacatalog.v1beta1.json
│     │        │  │  │  ├─ dataflow.v1b3.json
│     │        │  │  │  ├─ dataform.v1beta1.json
│     │        │  │  │  ├─ datafusion.v1.json
│     │        │  │  │  ├─ datafusion.v1beta1.json
│     │        │  │  │  ├─ datalabeling.v1beta1.json
│     │        │  │  │  ├─ datalineage.v1.json
│     │        │  │  │  ├─ datamigration.v1.json
│     │        │  │  │  ├─ datamigration.v1beta1.json
│     │        │  │  │  ├─ datapipelines.v1.json
│     │        │  │  │  ├─ dataplex.v1.json
│     │        │  │  │  ├─ dataportability.v1.json
│     │        │  │  │  ├─ dataportability.v1beta.json
│     │        │  │  │  ├─ dataproc.v1.json
│     │        │  │  │  ├─ dataproc.v1beta2.json
│     │        │  │  │  ├─ datastore.v1.json
│     │        │  │  │  ├─ datastore.v1beta1.json
│     │        │  │  │  ├─ datastore.v1beta3.json
│     │        │  │  │  ├─ datastream.v1.json
│     │        │  │  │  ├─ datastream.v1alpha1.json
│     │        │  │  │  ├─ deploymentmanager.alpha.json
│     │        │  │  │  ├─ deploymentmanager.v2.json
│     │        │  │  │  ├─ deploymentmanager.v2beta.json
│     │        │  │  │  ├─ developerconnect.v1.json
│     │        │  │  │  ├─ dfareporting.v3.3.json
│     │        │  │  │  ├─ dfareporting.v3.4.json
│     │        │  │  │  ├─ dfareporting.v3.5.json
│     │        │  │  │  ├─ dfareporting.v4.json
│     │        │  │  │  ├─ dfareporting.v5.json
│     │        │  │  │  ├─ dialogflow.v2.json
│     │        │  │  │  ├─ dialogflow.v2beta1.json
│     │        │  │  │  ├─ dialogflow.v3.json
│     │        │  │  │  ├─ dialogflow.v3beta1.json
│     │        │  │  │  ├─ digitalassetlinks.v1.json
│     │        │  │  │  ├─ discovery.v1.json
│     │        │  │  │  ├─ discoveryengine.v1.json
│     │        │  │  │  ├─ discoveryengine.v1alpha.json
│     │        │  │  │  ├─ discoveryengine.v1beta.json
│     │        │  │  │  ├─ displayvideo.v1.json
│     │        │  │  │  ├─ displayvideo.v2.json
│     │        │  │  │  ├─ displayvideo.v3.json
│     │        │  │  │  ├─ displayvideo.v4.json
│     │        │  │  │  ├─ dlp.v2.json
│     │        │  │  │  ├─ dns.v1.json
│     │        │  │  │  ├─ dns.v1beta2.json
│     │        │  │  │  ├─ dns.v2.json
│     │        │  │  │  ├─ docs.v1.json
│     │        │  │  │  ├─ documentai.v1.json
│     │        │  │  │  ├─ documentai.v1beta2.json
│     │        │  │  │  ├─ documentai.v1beta3.json
│     │        │  │  │  ├─ domains.v1.json
│     │        │  │  │  ├─ domains.v1alpha2.json
│     │        │  │  │  ├─ domains.v1beta1.json
│     │        │  │  │  ├─ domainsrdap.v1.json
│     │        │  │  │  ├─ doubleclickbidmanager.v1.1.json
│     │        │  │  │  ├─ doubleclickbidmanager.v1.json
│     │        │  │  │  ├─ doubleclickbidmanager.v2.json
│     │        │  │  │  ├─ doubleclicksearch.v2.json
│     │        │  │  │  ├─ drive.v2.json
│     │        │  │  │  ├─ drive.v3.json
│     │        │  │  │  ├─ driveactivity.v2.json
│     │        │  │  │  ├─ drivelabels.v2.json
│     │        │  │  │  ├─ drivelabels.v2beta.json
│     │        │  │  │  ├─ essentialcontacts.v1.json
│     │        │  │  │  ├─ eventarc.v1.json
│     │        │  │  │  ├─ eventarc.v1beta1.json
│     │        │  │  │  ├─ factchecktools.v1alpha1.json
│     │        │  │  │  ├─ fcm.v1.json
│     │        │  │  │  ├─ fcmdata.v1beta1.json
│     │        │  │  │  ├─ file.v1.json
│     │        │  │  │  ├─ file.v1beta1.json
│     │        │  │  │  ├─ firebase.v1beta1.json
│     │        │  │  │  ├─ firebaseappcheck.v1.json
│     │        │  │  │  ├─ firebaseappcheck.v1beta.json
│     │        │  │  │  ├─ firebaseappdistribution.v1.json
│     │        │  │  │  ├─ firebaseappdistribution.v1alpha.json
│     │        │  │  │  ├─ firebaseapphosting.v1.json
│     │        │  │  │  ├─ firebaseapphosting.v1beta.json
│     │        │  │  │  ├─ firebasedatabase.v1beta.json
│     │        │  │  │  ├─ firebasedataconnect.v1.json
│     │        │  │  │  ├─ firebasedataconnect.v1beta.json
│     │        │  │  │  ├─ firebasedynamiclinks.v1.json
│     │        │  │  │  ├─ firebasehosting.v1.json
│     │        │  │  │  ├─ firebasehosting.v1beta1.json
│     │        │  │  │  ├─ firebaseml.v1.json
│     │        │  │  │  ├─ firebaseml.v1beta2.json
│     │        │  │  │  ├─ firebaseml.v2beta.json
│     │        │  │  │  ├─ firebaserules.v1.json
│     │        │  │  │  ├─ firebasestorage.v1beta.json
│     │        │  │  │  ├─ firestore.v1.json
│     │        │  │  │  ├─ firestore.v1beta1.json
│     │        │  │  │  ├─ firestore.v1beta2.json
│     │        │  │  │  ├─ fitness.v1.json
│     │        │  │  │  ├─ forms.v1.json
│     │        │  │  │  ├─ games.v1.json
│     │        │  │  │  ├─ gamesConfiguration.v1configuration.json
│     │        │  │  │  ├─ gamesManagement.v1management.json
│     │        │  │  │  ├─ gameservices.v1.json
│     │        │  │  │  ├─ gameservices.v1beta.json
│     │        │  │  │  ├─ genomics.v1.json
│     │        │  │  │  ├─ genomics.v1alpha2.json
│     │        │  │  │  ├─ genomics.v2alpha1.json
│     │        │  │  │  ├─ gkebackup.v1.json
│     │        │  │  │  ├─ gkehub.v1.json
│     │        │  │  │  ├─ gkehub.v1alpha.json
│     │        │  │  │  ├─ gkehub.v1alpha2.json
│     │        │  │  │  ├─ gkehub.v1beta.json
│     │        │  │  │  ├─ gkehub.v1beta1.json
│     │        │  │  │  ├─ gkehub.v2.json
│     │        │  │  │  ├─ gkehub.v2alpha.json
│     │        │  │  │  ├─ gkehub.v2beta.json
│     │        │  │  │  ├─ gkeonprem.v1.json
│     │        │  │  │  ├─ gmail.v1.json
│     │        │  │  │  ├─ gmailpostmastertools.v1.json
│     │        │  │  │  ├─ gmailpostmastertools.v1beta1.json
│     │        │  │  │  ├─ groupsmigration.v1.json
│     │        │  │  │  ├─ groupssettings.v1.json
│     │        │  │  │  ├─ healthcare.v1.json
│     │        │  │  │  ├─ healthcare.v1beta1.json
│     │        │  │  │  ├─ homegraph.v1.json
│     │        │  │  │  ├─ iam.v1.json
│     │        │  │  │  ├─ iam.v2.json
│     │        │  │  │  ├─ iam.v2beta.json
│     │        │  │  │  ├─ iamcredentials.v1.json
│     │        │  │  │  ├─ iap.v1.json
│     │        │  │  │  ├─ iap.v1beta1.json
│     │        │  │  │  ├─ ideahub.v1alpha.json
│     │        │  │  │  ├─ ideahub.v1beta.json
│     │        │  │  │  ├─ identitytoolkit.v1.json
│     │        │  │  │  ├─ identitytoolkit.v2.json
│     │        │  │  │  ├─ identitytoolkit.v3.json
│     │        │  │  │  ├─ ids.v1.json
│     │        │  │  │  ├─ index.json
│     │        │  │  │  ├─ indexing.v3.json
│     │        │  │  │  ├─ integrations.v1.json
│     │        │  │  │  ├─ integrations.v1alpha.json
│     │        │  │  │  ├─ jobs.v2.json
│     │        │  │  │  ├─ jobs.v3.json
│     │        │  │  │  ├─ jobs.v3p1beta1.json
│     │        │  │  │  ├─ jobs.v4.json
│     │        │  │  │  ├─ keep.v1.json
│     │        │  │  │  ├─ kgsearch.v1.json
│     │        │  │  │  ├─ kmsinventory.v1.json
│     │        │  │  │  ├─ language.v1.json
│     │        │  │  │  ├─ language.v1beta1.json
│     │        │  │  │  ├─ language.v1beta2.json
│     │        │  │  │  ├─ language.v2.json
│     │        │  │  │  ├─ libraryagent.v1.json
│     │        │  │  │  ├─ licensing.v1.json
│     │        │  │  │  ├─ lifesciences.v2beta.json
│     │        │  │  │  ├─ localservices.v1.json
│     │        │  │  │  ├─ logging.v2.json
│     │        │  │  │  ├─ looker.v1.json
│     │        │  │  │  ├─ managedidentities.v1.json
│     │        │  │  │  ├─ managedidentities.v1alpha1.json
│     │        │  │  │  ├─ managedidentities.v1beta1.json
│     │        │  │  │  ├─ managedkafka.v1.json
│     │        │  │  │  ├─ manufacturers.v1.json
│     │        │  │  │  ├─ marketingplatformadmin.v1alpha.json
│     │        │  │  │  ├─ meet.v2.json
│     │        │  │  │  ├─ memcache.v1.json
│     │        │  │  │  ├─ memcache.v1beta2.json
│     │        │  │  │  ├─ merchantapi.accounts_v1.json
│     │        │  │  │  ├─ merchantapi.accounts_v1beta.json
│     │        │  │  │  ├─ merchantapi.conversions_v1.json
│     │        │  │  │  ├─ merchantapi.conversions_v1beta.json
│     │        │  │  │  ├─ merchantapi.datasources_v1.json
│     │        │  │  │  ├─ merchantapi.datasources_v1beta.json
│     │        │  │  │  ├─ merchantapi.inventories_v1.json
│     │        │  │  │  ├─ merchantapi.inventories_v1beta.json
│     │        │  │  │  ├─ merchantapi.issueresolution_v1.json
│     │        │  │  │  ├─ merchantapi.issueresolution_v1beta.json
│     │        │  │  │  ├─ merchantapi.lfp_v1.json
│     │        │  │  │  ├─ merchantapi.lfp_v1beta.json
│     │        │  │  │  ├─ merchantapi.notifications_v1.json
│     │        │  │  │  ├─ merchantapi.notifications_v1beta.json
│     │        │  │  │  ├─ merchantapi.ordertracking_v1.json
│     │        │  │  │  ├─ merchantapi.ordertracking_v1beta.json
│     │        │  │  │  ├─ merchantapi.products_v1.json
│     │        │  │  │  ├─ merchantapi.products_v1beta.json
│     │        │  │  │  ├─ merchantapi.promotions_v1.json
│     │        │  │  │  ├─ merchantapi.promotions_v1beta.json
│     │        │  │  │  ├─ merchantapi.quota_v1.json
│     │        │  │  │  ├─ merchantapi.quota_v1beta.json
│     │        │  │  │  ├─ merchantapi.reports_v1.json
│     │        │  │  │  ├─ merchantapi.reports_v1beta.json
│     │        │  │  │  ├─ merchantapi.reviews_v1beta.json
│     │        │  │  │  ├─ metastore.v1.json
│     │        │  │  │  ├─ metastore.v1alpha.json
│     │        │  │  │  ├─ metastore.v1beta.json
│     │        │  │  │  ├─ metastore.v2.json
│     │        │  │  │  ├─ metastore.v2alpha.json
│     │        │  │  │  ├─ metastore.v2beta.json
│     │        │  │  │  ├─ migrationcenter.v1.json
│     │        │  │  │  ├─ migrationcenter.v1alpha1.json
│     │        │  │  │  ├─ ml.v1.json
│     │        │  │  │  ├─ monitoring.v1.json
│     │        │  │  │  ├─ monitoring.v3.json
│     │        │  │  │  ├─ mybusinessaccountmanagement.v1.json
│     │        │  │  │  ├─ mybusinessbusinesscalls.v1.json
│     │        │  │  │  ├─ mybusinessbusinessinformation.v1.json
│     │        │  │  │  ├─ mybusinesslodging.v1.json
│     │        │  │  │  ├─ mybusinessnotifications.v1.json
│     │        │  │  │  ├─ mybusinessplaceactions.v1.json
│     │        │  │  │  ├─ mybusinessqanda.v1.json
│     │        │  │  │  ├─ mybusinessverifications.v1.json
│     │        │  │  │  ├─ netapp.v1.json
│     │        │  │  │  ├─ netapp.v1beta1.json
│     │        │  │  │  ├─ networkconnectivity.v1.json
│     │        │  │  │  ├─ networkconnectivity.v1alpha1.json
│     │        │  │  │  ├─ networkmanagement.v1.json
│     │        │  │  │  ├─ networkmanagement.v1beta1.json
│     │        │  │  │  ├─ networksecurity.v1.json
│     │        │  │  │  ├─ networksecurity.v1beta1.json
│     │        │  │  │  ├─ networkservices.v1.json
│     │        │  │  │  ├─ networkservices.v1beta1.json
│     │        │  │  │  ├─ notebooks.v1.json
│     │        │  │  │  ├─ notebooks.v2.json
│     │        │  │  │  ├─ oauth2.v2.json
│     │        │  │  │  ├─ observability.v1.json
│     │        │  │  │  ├─ ondemandscanning.v1.json
│     │        │  │  │  ├─ ondemandscanning.v1beta1.json
│     │        │  │  │  ├─ oracledatabase.v1.json
│     │        │  │  │  ├─ orgpolicy.v2.json
│     │        │  │  │  ├─ osconfig.v1.json
│     │        │  │  │  ├─ osconfig.v1alpha.json
│     │        │  │  │  ├─ osconfig.v1beta.json
│     │        │  │  │  ├─ osconfig.v2.json
│     │        │  │  │  ├─ osconfig.v2beta.json
│     │        │  │  │  ├─ oslogin.v1.json
│     │        │  │  │  ├─ oslogin.v1alpha.json
│     │        │  │  │  ├─ oslogin.v1beta.json
│     │        │  │  │  ├─ pagespeedonline.v5.json
│     │        │  │  │  ├─ parallelstore.v1.json
│     │        │  │  │  ├─ parallelstore.v1beta.json
│     │        │  │  │  ├─ parametermanager.v1.json
│     │        │  │  │  ├─ paymentsresellersubscription.v1.json
│     │        │  │  │  ├─ people.v1.json
│     │        │  │  │  ├─ places.v1.json
│     │        │  │  │  ├─ playablelocations.v3.json
│     │        │  │  │  ├─ playcustomapp.v1.json
│     │        │  │  │  ├─ playdeveloperreporting.v1alpha1.json
│     │        │  │  │  ├─ playdeveloperreporting.v1beta1.json
│     │        │  │  │  ├─ playgrouping.v1alpha1.json
│     │        │  │  │  ├─ playintegrity.v1.json
│     │        │  │  │  ├─ policyanalyzer.v1.json
│     │        │  │  │  ├─ policyanalyzer.v1beta1.json
│     │        │  │  │  ├─ policysimulator.v1.json
│     │        │  │  │  ├─ policysimulator.v1alpha.json
│     │        │  │  │  ├─ policysimulator.v1beta.json
│     │        │  │  │  ├─ policysimulator.v1beta1.json
│     │        │  │  │  ├─ policytroubleshooter.v1.json
│     │        │  │  │  ├─ policytroubleshooter.v1beta.json
│     │        │  │  │  ├─ pollen.v1.json
│     │        │  │  │  ├─ poly.v1.json
│     │        │  │  │  ├─ privateca.v1.json
│     │        │  │  │  ├─ privateca.v1beta1.json
│     │        │  │  │  ├─ prod_tt_sasportal.v1alpha1.json
│     │        │  │  │  ├─ publicca.v1.json
│     │        │  │  │  ├─ publicca.v1alpha1.json
│     │        │  │  │  ├─ publicca.v1beta1.json
│     │        │  │  │  ├─ pubsub.v1.json
│     │        │  │  │  ├─ pubsub.v1beta1a.json
│     │        │  │  │  ├─ pubsub.v1beta2.json
│     │        │  │  │  ├─ pubsublite.v1.json
│     │        │  │  │  ├─ rapidmigrationassessment.v1.json
│     │        │  │  │  ├─ readerrevenuesubscriptionlinking.v1.json
│     │        │  │  │  ├─ realtimebidding.v1.json
│     │        │  │  │  ├─ realtimebidding.v1alpha.json
│     │        │  │  │  ├─ recaptchaenterprise.v1.json
│     │        │  │  │  ├─ recommendationengine.v1beta1.json
│     │        │  │  │  ├─ recommender.v1.json
│     │        │  │  │  ├─ recommender.v1beta1.json
│     │        │  │  │  ├─ redis.v1.json
│     │        │  │  │  ├─ redis.v1beta1.json
│     │        │  │  │  ├─ remotebuildexecution.v1.json
│     │        │  │  │  ├─ remotebuildexecution.v1alpha.json
│     │        │  │  │  ├─ remotebuildexecution.v2.json
│     │        │  │  │  ├─ reseller.v1.json
│     │        │  │  │  ├─ resourcesettings.v1.json
│     │        │  │  │  ├─ retail.v2.json
│     │        │  │  │  ├─ retail.v2alpha.json
│     │        │  │  │  ├─ retail.v2beta.json
│     │        │  │  │  ├─ run.v1.json
│     │        │  │  │  ├─ run.v1alpha1.json
│     │        │  │  │  ├─ run.v1beta1.json
│     │        │  │  │  ├─ run.v2.json
│     │        │  │  │  ├─ runtimeconfig.v1.json
│     │        │  │  │  ├─ runtimeconfig.v1beta1.json
│     │        │  │  │  ├─ saasservicemgmt.v1beta1.json
│     │        │  │  │  ├─ safebrowsing.v4.json
│     │        │  │  │  ├─ safebrowsing.v5.json
│     │        │  │  │  ├─ sasportal.v1alpha1.json
│     │        │  │  │  ├─ script.v1.json
│     │        │  │  │  ├─ searchads360.v0.json
│     │        │  │  │  ├─ searchconsole.v1.json
│     │        │  │  │  ├─ secretmanager.v1.json
│     │        │  │  │  ├─ secretmanager.v1beta1.json
│     │        │  │  │  ├─ secretmanager.v1beta2.json
│     │        │  │  │  ├─ securesourcemanager.v1.json
│     │        │  │  │  ├─ securitycenter.v1.json
│     │        │  │  │  ├─ securitycenter.v1beta1.json
│     │        │  │  │  ├─ securitycenter.v1beta2.json
│     │        │  │  │  ├─ securityposture.v1.json
│     │        │  │  │  ├─ serviceconsumermanagement.v1.json
│     │        │  │  │  ├─ serviceconsumermanagement.v1beta1.json
│     │        │  │  │  ├─ servicecontrol.v1.json
│     │        │  │  │  ├─ servicecontrol.v2.json
│     │        │  │  │  ├─ servicedirectory.v1.json
│     │        │  │  │  ├─ servicedirectory.v1beta1.json
│     │        │  │  │  ├─ servicemanagement.v1.json
│     │        │  │  │  ├─ servicenetworking.v1.json
│     │        │  │  │  ├─ servicenetworking.v1beta.json
│     │        │  │  │  ├─ serviceusage.v1.json
│     │        │  │  │  ├─ serviceusage.v1beta1.json
│     │        │  │  │  ├─ sheets.v4.json
│     │        │  │  │  ├─ siteVerification.v1.json
│     │        │  │  │  ├─ slides.v1.json
│     │        │  │  │  ├─ smartdevicemanagement.v1.json
│     │        │  │  │  ├─ solar.v1.json
│     │        │  │  │  ├─ sourcerepo.v1.json
│     │        │  │  │  ├─ spanner.v1.json
│     │        │  │  │  ├─ speech.v1.json
│     │        │  │  │  ├─ speech.v1p1beta1.json
│     │        │  │  │  ├─ speech.v2beta1.json
│     │        │  │  │  ├─ sqladmin.v1.json
│     │        │  │  │  ├─ sqladmin.v1beta4.json
│     │        │  │  │  ├─ storage.v1.json
│     │        │  │  │  ├─ storagebatchoperations.v1.json
│     │        │  │  │  ├─ storagetransfer.v1.json
│     │        │  │  │  ├─ streetviewpublish.v1.json
│     │        │  │  │  ├─ sts.v1.json
│     │        │  │  │  ├─ sts.v1beta.json
│     │        │  │  │  ├─ tagmanager.v1.json
│     │        │  │  │  ├─ tagmanager.v2.json
│     │        │  │  │  ├─ tasks.v1.json
│     │        │  │  │  ├─ testing.v1.json
│     │        │  │  │  ├─ texttospeech.v1.json
│     │        │  │  │  ├─ texttospeech.v1beta1.json
│     │        │  │  │  ├─ toolresults.v1beta3.json
│     │        │  │  │  ├─ tpu.v1.json
│     │        │  │  │  ├─ tpu.v1alpha1.json
│     │        │  │  │  ├─ tpu.v2.json
│     │        │  │  │  ├─ tpu.v2alpha1.json
│     │        │  │  │  ├─ trafficdirector.v2.json
│     │        │  │  │  ├─ trafficdirector.v3.json
│     │        │  │  │  ├─ transcoder.v1.json
│     │        │  │  │  ├─ transcoder.v1beta1.json
│     │        │  │  │  ├─ translate.v2.json
│     │        │  │  │  ├─ translate.v3.json
│     │        │  │  │  ├─ translate.v3beta1.json
│     │        │  │  │  ├─ travelimpactmodel.v1.json
│     │        │  │  │  ├─ vault.v1.json
│     │        │  │  │  ├─ vectortile.v1.json
│     │        │  │  │  ├─ verifiedaccess.v1.json
│     │        │  │  │  ├─ verifiedaccess.v2.json
│     │        │  │  │  ├─ versionhistory.v1.json
│     │        │  │  │  ├─ videointelligence.v1.json
│     │        │  │  │  ├─ videointelligence.v1beta2.json
│     │        │  │  │  ├─ videointelligence.v1p1beta1.json
│     │        │  │  │  ├─ videointelligence.v1p2beta1.json
│     │        │  │  │  ├─ videointelligence.v1p3beta1.json
│     │        │  │  │  ├─ vision.v1.json
│     │        │  │  │  ├─ vision.v1p1beta1.json
│     │        │  │  │  ├─ vision.v1p2beta1.json
│     │        │  │  │  ├─ vmmigration.v1.json
│     │        │  │  │  ├─ vmmigration.v1alpha1.json
│     │        │  │  │  ├─ vmwareengine.v1.json
│     │        │  │  │  ├─ vpcaccess.v1.json
│     │        │  │  │  ├─ vpcaccess.v1beta1.json
│     │        │  │  │  ├─ walletobjects.v1.json
│     │        │  │  │  ├─ webfonts.v1.json
│     │        │  │  │  ├─ webmasters.v3.json
│     │        │  │  │  ├─ webrisk.v1.json
│     │        │  │  │  ├─ websecurityscanner.v1.json
│     │        │  │  │  ├─ websecurityscanner.v1alpha.json
│     │        │  │  │  ├─ websecurityscanner.v1beta.json
│     │        │  │  │  ├─ workflowexecutions.v1.json
│     │        │  │  │  ├─ workflowexecutions.v1beta.json
│     │        │  │  │  ├─ workflows.v1.json
│     │        │  │  │  ├─ workflows.v1beta.json
│     │        │  │  │  ├─ workloadmanager.v1.json
│     │        │  │  │  ├─ workspaceevents.v1.json
│     │        │  │  │  ├─ workstations.v1.json
│     │        │  │  │  ├─ workstations.v1beta.json
│     │        │  │  │  ├─ youtube.v3.json
│     │        │  │  │  ├─ youtubeAnalytics.v1.json
│     │        │  │  │  ├─ youtubeAnalytics.v2.json
│     │        │  │  │  └─ youtubereporting.v1.json
│     │        │  │  └─ file_cache.py
│     │        │  ├─ errors.py
│     │        │  ├─ http.py
│     │        │  ├─ mimeparse.py
│     │        │  ├─ model.py
│     │        │  ├─ sample_tools.py
│     │        │  ├─ schema.py
│     │        │  └─ version.py
│     │        ├─ googleapis_common_protos-1.70.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ top_level.txt
│     │        ├─ grpc
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _auth.cpython-313.pyc
│     │        │  │  ├─ _channel.cpython-313.pyc
│     │        │  │  ├─ _common.cpython-313.pyc
│     │        │  │  ├─ _compression.cpython-313.pyc
│     │        │  │  ├─ _grpcio_metadata.cpython-313.pyc
│     │        │  │  ├─ _interceptor.cpython-313.pyc
│     │        │  │  ├─ _observability.cpython-313.pyc
│     │        │  │  ├─ _plugin_wrapping.cpython-313.pyc
│     │        │  │  ├─ _runtime_protos.cpython-313.pyc
│     │        │  │  ├─ _server.cpython-313.pyc
│     │        │  │  ├─ _simple_stubs.cpython-313.pyc
│     │        │  │  ├─ _typing.cpython-313.pyc
│     │        │  │  └─ _utilities.cpython-313.pyc
│     │        │  ├─ _auth.py
│     │        │  ├─ _channel.py
│     │        │  ├─ _common.py
│     │        │  ├─ _compression.py
│     │        │  ├─ _cython
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  └─ __init__.cpython-313.pyc
│     │        │  │  ├─ _credentials
│     │        │  │  │  └─ roots.pem
│     │        │  │  ├─ _cygrpc
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  └─ __pycache__
│     │        │  │  │     └─ __init__.cpython-313.pyc
│     │        │  │  └─ cygrpc.cpython-313-darwin.so
│     │        │  ├─ _grpcio_metadata.py
│     │        │  ├─ _interceptor.py
│     │        │  ├─ _observability.py
│     │        │  ├─ _plugin_wrapping.py
│     │        │  ├─ _runtime_protos.py
│     │        │  ├─ _server.py
│     │        │  ├─ _simple_stubs.py
│     │        │  ├─ _typing.py
│     │        │  ├─ _utilities.py
│     │        │  ├─ aio
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _base_call.cpython-313.pyc
│     │        │  │  │  ├─ _base_channel.cpython-313.pyc
│     │        │  │  │  ├─ _base_server.cpython-313.pyc
│     │        │  │  │  ├─ _call.cpython-313.pyc
│     │        │  │  │  ├─ _channel.cpython-313.pyc
│     │        │  │  │  ├─ _interceptor.cpython-313.pyc
│     │        │  │  │  ├─ _metadata.cpython-313.pyc
│     │        │  │  │  ├─ _server.cpython-313.pyc
│     │        │  │  │  ├─ _typing.cpython-313.pyc
│     │        │  │  │  └─ _utils.cpython-313.pyc
│     │        │  │  ├─ _base_call.py
│     │        │  │  ├─ _base_channel.py
│     │        │  │  ├─ _base_server.py
│     │        │  │  ├─ _call.py
│     │        │  │  ├─ _channel.py
│     │        │  │  ├─ _interceptor.py
│     │        │  │  ├─ _metadata.py
│     │        │  │  ├─ _server.py
│     │        │  │  ├─ _typing.py
│     │        │  │  └─ _utils.py
│     │        │  ├─ beta
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _client_adaptations.cpython-313.pyc
│     │        │  │  │  ├─ _metadata.cpython-313.pyc
│     │        │  │  │  ├─ _server_adaptations.cpython-313.pyc
│     │        │  │  │  ├─ implementations.cpython-313.pyc
│     │        │  │  │  ├─ interfaces.cpython-313.pyc
│     │        │  │  │  └─ utilities.cpython-313.pyc
│     │        │  │  ├─ _client_adaptations.py
│     │        │  │  ├─ _metadata.py
│     │        │  │  ├─ _server_adaptations.py
│     │        │  │  ├─ implementations.py
│     │        │  │  ├─ interfaces.py
│     │        │  │  └─ utilities.py
│     │        │  ├─ experimental
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ gevent.cpython-313.pyc
│     │        │  │  │  └─ session_cache.cpython-313.pyc
│     │        │  │  ├─ aio
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  └─ __pycache__
│     │        │  │  │     └─ __init__.cpython-313.pyc
│     │        │  │  ├─ gevent.py
│     │        │  │  └─ session_cache.py
│     │        │  └─ framework
│     │        │     ├─ __init__.py
│     │        │     ├─ __pycache__
│     │        │     │  └─ __init__.cpython-313.pyc
│     │        │     ├─ common
│     │        │     │  ├─ __init__.py
│     │        │     │  ├─ __pycache__
│     │        │     │  │  ├─ __init__.cpython-313.pyc
│     │        │     │  │  ├─ cardinality.cpython-313.pyc
│     │        │     │  │  └─ style.cpython-313.pyc
│     │        │     │  ├─ cardinality.py
│     │        │     │  └─ style.py
│     │        │     ├─ foundation
│     │        │     │  ├─ __init__.py
│     │        │     │  ├─ __pycache__
│     │        │     │  │  ├─ __init__.cpython-313.pyc
│     │        │     │  │  ├─ abandonment.cpython-313.pyc
│     │        │     │  │  ├─ callable_util.cpython-313.pyc
│     │        │     │  │  ├─ future.cpython-313.pyc
│     │        │     │  │  ├─ logging_pool.cpython-313.pyc
│     │        │     │  │  ├─ stream.cpython-313.pyc
│     │        │     │  │  └─ stream_util.cpython-313.pyc
│     │        │     │  ├─ abandonment.py
│     │        │     │  ├─ callable_util.py
│     │        │     │  ├─ future.py
│     │        │     │  ├─ logging_pool.py
│     │        │     │  ├─ stream.py
│     │        │     │  └─ stream_util.py
│     │        │     └─ interfaces
│     │        │        ├─ __init__.py
│     │        │        ├─ __pycache__
│     │        │        │  └─ __init__.cpython-313.pyc
│     │        │        ├─ base
│     │        │        │  ├─ __init__.py
│     │        │        │  ├─ __pycache__
│     │        │        │  │  ├─ __init__.cpython-313.pyc
│     │        │        │  │  ├─ base.cpython-313.pyc
│     │        │        │  │  └─ utilities.cpython-313.pyc
│     │        │        │  ├─ base.py
│     │        │        │  └─ utilities.py
│     │        │        └─ face
│     │        │           ├─ __init__.py
│     │        │           ├─ __pycache__
│     │        │           │  ├─ __init__.cpython-313.pyc
│     │        │           │  ├─ face.cpython-313.pyc
│     │        │           │  └─ utilities.cpython-313.pyc
│     │        │           ├─ face.py
│     │        │           └─ utilities.py
│     │        ├─ grpc_status
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _async.cpython-313.pyc
│     │        │  │  ├─ _common.cpython-313.pyc
│     │        │  │  └─ rpc_status.cpython-313.pyc
│     │        │  ├─ _async.py
│     │        │  ├─ _common.py
│     │        │  └─ rpc_status.py
│     │        ├─ grpcio-1.75.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ top_level.txt
│     │        ├─ grpcio_status-1.71.2.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ top_level.txt
│     │        ├─ h11
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _abnf.cpython-313.pyc
│     │        │  │  ├─ _connection.cpython-313.pyc
│     │        │  │  ├─ _events.cpython-313.pyc
│     │        │  │  ├─ _headers.cpython-313.pyc
│     │        │  │  ├─ _readers.cpython-313.pyc
│     │        │  │  ├─ _receivebuffer.cpython-313.pyc
│     │        │  │  ├─ _state.cpython-313.pyc
│     │        │  │  ├─ _util.cpython-313.pyc
│     │        │  │  ├─ _version.cpython-313.pyc
│     │        │  │  └─ _writers.cpython-313.pyc
│     │        │  ├─ _abnf.py
│     │        │  ├─ _connection.py
│     │        │  ├─ _events.py
│     │        │  ├─ _headers.py
│     │        │  ├─ _readers.py
│     │        │  ├─ _receivebuffer.py
│     │        │  ├─ _state.py
│     │        │  ├─ _util.py
│     │        │  ├─ _version.py
│     │        │  ├─ _writers.py
│     │        │  └─ py.typed
│     │        ├─ h11-0.16.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE.txt
│     │        │  └─ top_level.txt
│     │        ├─ httplib2
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ auth.cpython-313.pyc
│     │        │  │  ├─ certs.cpython-313.pyc
│     │        │  │  ├─ error.cpython-313.pyc
│     │        │  │  └─ iri2uri.cpython-313.pyc
│     │        │  ├─ auth.py
│     │        │  ├─ cacerts.txt
│     │        │  ├─ certs.py
│     │        │  ├─ error.py
│     │        │  └─ iri2uri.py
│     │        ├─ httplib2-0.31.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ idna
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ codec.cpython-313.pyc
│     │        │  │  ├─ compat.cpython-313.pyc
│     │        │  │  ├─ core.cpython-313.pyc
│     │        │  │  ├─ idnadata.cpython-313.pyc
│     │        │  │  ├─ intranges.cpython-313.pyc
│     │        │  │  ├─ package_data.cpython-313.pyc
│     │        │  │  └─ uts46data.cpython-313.pyc
│     │        │  ├─ codec.py
│     │        │  ├─ compat.py
│     │        │  ├─ core.py
│     │        │  ├─ idnadata.py
│     │        │  ├─ intranges.py
│     │        │  ├─ package_data.py
│     │        │  ├─ py.typed
│     │        │  └─ uts46data.py
│     │        ├─ idna-3.10.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE.md
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  └─ WHEEL
│     │        ├─ pip
│     │        │  ├─ __init__.py
│     │        │  ├─ __main__.py
│     │        │  ├─ __pip-runner__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  └─ __pip-runner__.cpython-313.pyc
│     │        │  ├─ _internal
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ build_env.cpython-313.pyc
│     │        │  │  │  ├─ cache.cpython-313.pyc
│     │        │  │  │  ├─ configuration.cpython-313.pyc
│     │        │  │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  │  ├─ main.cpython-313.pyc
│     │        │  │  │  ├─ pyproject.cpython-313.pyc
│     │        │  │  │  ├─ self_outdated_check.cpython-313.pyc
│     │        │  │  │  └─ wheel_builder.cpython-313.pyc
│     │        │  │  ├─ build_env.py
│     │        │  │  ├─ cache.py
│     │        │  │  ├─ cli
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ autocompletion.cpython-313.pyc
│     │        │  │  │  │  ├─ base_command.cpython-313.pyc
│     │        │  │  │  │  ├─ cmdoptions.cpython-313.pyc
│     │        │  │  │  │  ├─ command_context.cpython-313.pyc
│     │        │  │  │  │  ├─ index_command.cpython-313.pyc
│     │        │  │  │  │  ├─ main.cpython-313.pyc
│     │        │  │  │  │  ├─ main_parser.cpython-313.pyc
│     │        │  │  │  │  ├─ parser.cpython-313.pyc
│     │        │  │  │  │  ├─ progress_bars.cpython-313.pyc
│     │        │  │  │  │  ├─ req_command.cpython-313.pyc
│     │        │  │  │  │  ├─ spinners.cpython-313.pyc
│     │        │  │  │  │  └─ status_codes.cpython-313.pyc
│     │        │  │  │  ├─ autocompletion.py
│     │        │  │  │  ├─ base_command.py
│     │        │  │  │  ├─ cmdoptions.py
│     │        │  │  │  ├─ command_context.py
│     │        │  │  │  ├─ index_command.py
│     │        │  │  │  ├─ main.py
│     │        │  │  │  ├─ main_parser.py
│     │        │  │  │  ├─ parser.py
│     │        │  │  │  ├─ progress_bars.py
│     │        │  │  │  ├─ req_command.py
│     │        │  │  │  ├─ spinners.py
│     │        │  │  │  └─ status_codes.py
│     │        │  │  ├─ commands
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ cache.cpython-313.pyc
│     │        │  │  │  │  ├─ check.cpython-313.pyc
│     │        │  │  │  │  ├─ completion.cpython-313.pyc
│     │        │  │  │  │  ├─ configuration.cpython-313.pyc
│     │        │  │  │  │  ├─ debug.cpython-313.pyc
│     │        │  │  │  │  ├─ download.cpython-313.pyc
│     │        │  │  │  │  ├─ freeze.cpython-313.pyc
│     │        │  │  │  │  ├─ hash.cpython-313.pyc
│     │        │  │  │  │  ├─ help.cpython-313.pyc
│     │        │  │  │  │  ├─ index.cpython-313.pyc
│     │        │  │  │  │  ├─ inspect.cpython-313.pyc
│     │        │  │  │  │  ├─ install.cpython-313.pyc
│     │        │  │  │  │  ├─ list.cpython-313.pyc
│     │        │  │  │  │  ├─ search.cpython-313.pyc
│     │        │  │  │  │  ├─ show.cpython-313.pyc
│     │        │  │  │  │  ├─ uninstall.cpython-313.pyc
│     │        │  │  │  │  └─ wheel.cpython-313.pyc
│     │        │  │  │  ├─ cache.py
│     │        │  │  │  ├─ check.py
│     │        │  │  │  ├─ completion.py
│     │        │  │  │  ├─ configuration.py
│     │        │  │  │  ├─ debug.py
│     │        │  │  │  ├─ download.py
│     │        │  │  │  ├─ freeze.py
│     │        │  │  │  ├─ hash.py
│     │        │  │  │  ├─ help.py
│     │        │  │  │  ├─ index.py
│     │        │  │  │  ├─ inspect.py
│     │        │  │  │  ├─ install.py
│     │        │  │  │  ├─ list.py
│     │        │  │  │  ├─ search.py
│     │        │  │  │  ├─ show.py
│     │        │  │  │  ├─ uninstall.py
│     │        │  │  │  └─ wheel.py
│     │        │  │  ├─ configuration.py
│     │        │  │  ├─ distributions
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  ├─ installed.cpython-313.pyc
│     │        │  │  │  │  ├─ sdist.cpython-313.pyc
│     │        │  │  │  │  └─ wheel.cpython-313.pyc
│     │        │  │  │  ├─ base.py
│     │        │  │  │  ├─ installed.py
│     │        │  │  │  ├─ sdist.py
│     │        │  │  │  └─ wheel.py
│     │        │  │  ├─ exceptions.py
│     │        │  │  ├─ index
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ collector.cpython-313.pyc
│     │        │  │  │  │  ├─ package_finder.cpython-313.pyc
│     │        │  │  │  │  └─ sources.cpython-313.pyc
│     │        │  │  │  ├─ collector.py
│     │        │  │  │  ├─ package_finder.py
│     │        │  │  │  └─ sources.py
│     │        │  │  ├─ locations
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _distutils.cpython-313.pyc
│     │        │  │  │  │  ├─ _sysconfig.cpython-313.pyc
│     │        │  │  │  │  └─ base.cpython-313.pyc
│     │        │  │  │  ├─ _distutils.py
│     │        │  │  │  ├─ _sysconfig.py
│     │        │  │  │  └─ base.py
│     │        │  │  ├─ main.py
│     │        │  │  ├─ metadata
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _json.cpython-313.pyc
│     │        │  │  │  │  ├─ base.cpython-313.pyc
│     │        │  │  │  │  └─ pkg_resources.cpython-313.pyc
│     │        │  │  │  ├─ _json.py
│     │        │  │  │  ├─ base.py
│     │        │  │  │  ├─ importlib
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ _compat.cpython-313.pyc
│     │        │  │  │  │  │  ├─ _dists.cpython-313.pyc
│     │        │  │  │  │  │  └─ _envs.cpython-313.pyc
│     │        │  │  │  │  ├─ _compat.py
│     │        │  │  │  │  ├─ _dists.py
│     │        │  │  │  │  └─ _envs.py
│     │        │  │  │  └─ pkg_resources.py
│     │        │  │  ├─ models
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ candidate.cpython-313.pyc
│     │        │  │  │  │  ├─ direct_url.cpython-313.pyc
│     │        │  │  │  │  ├─ format_control.cpython-313.pyc
│     │        │  │  │  │  ├─ index.cpython-313.pyc
│     │        │  │  │  │  ├─ installation_report.cpython-313.pyc
│     │        │  │  │  │  ├─ link.cpython-313.pyc
│     │        │  │  │  │  ├─ scheme.cpython-313.pyc
│     │        │  │  │  │  ├─ search_scope.cpython-313.pyc
│     │        │  │  │  │  ├─ selection_prefs.cpython-313.pyc
│     │        │  │  │  │  ├─ target_python.cpython-313.pyc
│     │        │  │  │  │  └─ wheel.cpython-313.pyc
│     │        │  │  │  ├─ candidate.py
│     │        │  │  │  ├─ direct_url.py
│     │        │  │  │  ├─ format_control.py
│     │        │  │  │  ├─ index.py
│     │        │  │  │  ├─ installation_report.py
│     │        │  │  │  ├─ link.py
│     │        │  │  │  ├─ scheme.py
│     │        │  │  │  ├─ search_scope.py
│     │        │  │  │  ├─ selection_prefs.py
│     │        │  │  │  ├─ target_python.py
│     │        │  │  │  └─ wheel.py
│     │        │  │  ├─ network
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ auth.cpython-313.pyc
│     │        │  │  │  │  ├─ cache.cpython-313.pyc
│     │        │  │  │  │  ├─ download.cpython-313.pyc
│     │        │  │  │  │  ├─ lazy_wheel.cpython-313.pyc
│     │        │  │  │  │  ├─ session.cpython-313.pyc
│     │        │  │  │  │  ├─ utils.cpython-313.pyc
│     │        │  │  │  │  └─ xmlrpc.cpython-313.pyc
│     │        │  │  │  ├─ auth.py
│     │        │  │  │  ├─ cache.py
│     │        │  │  │  ├─ download.py
│     │        │  │  │  ├─ lazy_wheel.py
│     │        │  │  │  ├─ session.py
│     │        │  │  │  ├─ utils.py
│     │        │  │  │  └─ xmlrpc.py
│     │        │  │  ├─ operations
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ check.cpython-313.pyc
│     │        │  │  │  │  ├─ freeze.cpython-313.pyc
│     │        │  │  │  │  └─ prepare.cpython-313.pyc
│     │        │  │  │  ├─ build
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ build_tracker.cpython-313.pyc
│     │        │  │  │  │  │  ├─ metadata.cpython-313.pyc
│     │        │  │  │  │  │  ├─ metadata_editable.cpython-313.pyc
│     │        │  │  │  │  │  ├─ metadata_legacy.cpython-313.pyc
│     │        │  │  │  │  │  ├─ wheel.cpython-313.pyc
│     │        │  │  │  │  │  ├─ wheel_editable.cpython-313.pyc
│     │        │  │  │  │  │  └─ wheel_legacy.cpython-313.pyc
│     │        │  │  │  │  ├─ build_tracker.py
│     │        │  │  │  │  ├─ metadata.py
│     │        │  │  │  │  ├─ metadata_editable.py
│     │        │  │  │  │  ├─ metadata_legacy.py
│     │        │  │  │  │  ├─ wheel.py
│     │        │  │  │  │  ├─ wheel_editable.py
│     │        │  │  │  │  └─ wheel_legacy.py
│     │        │  │  │  ├─ check.py
│     │        │  │  │  ├─ freeze.py
│     │        │  │  │  ├─ install
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ editable_legacy.cpython-313.pyc
│     │        │  │  │  │  │  └─ wheel.cpython-313.pyc
│     │        │  │  │  │  ├─ editable_legacy.py
│     │        │  │  │  │  └─ wheel.py
│     │        │  │  │  └─ prepare.py
│     │        │  │  ├─ pyproject.py
│     │        │  │  ├─ req
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ constructors.cpython-313.pyc
│     │        │  │  │  │  ├─ req_file.cpython-313.pyc
│     │        │  │  │  │  ├─ req_install.cpython-313.pyc
│     │        │  │  │  │  ├─ req_set.cpython-313.pyc
│     │        │  │  │  │  └─ req_uninstall.cpython-313.pyc
│     │        │  │  │  ├─ constructors.py
│     │        │  │  │  ├─ req_file.py
│     │        │  │  │  ├─ req_install.py
│     │        │  │  │  ├─ req_set.py
│     │        │  │  │  └─ req_uninstall.py
│     │        │  │  ├─ resolution
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ base.cpython-313.pyc
│     │        │  │  │  ├─ base.py
│     │        │  │  │  ├─ legacy
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  └─ resolver.cpython-313.pyc
│     │        │  │  │  │  └─ resolver.py
│     │        │  │  │  └─ resolvelib
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ base.cpython-313.pyc
│     │        │  │  │     │  ├─ candidates.cpython-313.pyc
│     │        │  │  │     │  ├─ factory.cpython-313.pyc
│     │        │  │  │     │  ├─ found_candidates.cpython-313.pyc
│     │        │  │  │     │  ├─ provider.cpython-313.pyc
│     │        │  │  │     │  ├─ reporter.cpython-313.pyc
│     │        │  │  │     │  ├─ requirements.cpython-313.pyc
│     │        │  │  │     │  └─ resolver.cpython-313.pyc
│     │        │  │  │     ├─ base.py
│     │        │  │  │     ├─ candidates.py
│     │        │  │  │     ├─ factory.py
│     │        │  │  │     ├─ found_candidates.py
│     │        │  │  │     ├─ provider.py
│     │        │  │  │     ├─ reporter.py
│     │        │  │  │     ├─ requirements.py
│     │        │  │  │     └─ resolver.py
│     │        │  │  ├─ self_outdated_check.py
│     │        │  │  ├─ utils
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _jaraco_text.cpython-313.pyc
│     │        │  │  │  │  ├─ _log.cpython-313.pyc
│     │        │  │  │  │  ├─ appdirs.cpython-313.pyc
│     │        │  │  │  │  ├─ compat.cpython-313.pyc
│     │        │  │  │  │  ├─ compatibility_tags.cpython-313.pyc
│     │        │  │  │  │  ├─ datetime.cpython-313.pyc
│     │        │  │  │  │  ├─ deprecation.cpython-313.pyc
│     │        │  │  │  │  ├─ direct_url_helpers.cpython-313.pyc
│     │        │  │  │  │  ├─ egg_link.cpython-313.pyc
│     │        │  │  │  │  ├─ entrypoints.cpython-313.pyc
│     │        │  │  │  │  ├─ filesystem.cpython-313.pyc
│     │        │  │  │  │  ├─ filetypes.cpython-313.pyc
│     │        │  │  │  │  ├─ glibc.cpython-313.pyc
│     │        │  │  │  │  ├─ hashes.cpython-313.pyc
│     │        │  │  │  │  ├─ logging.cpython-313.pyc
│     │        │  │  │  │  ├─ misc.cpython-313.pyc
│     │        │  │  │  │  ├─ packaging.cpython-313.pyc
│     │        │  │  │  │  ├─ retry.cpython-313.pyc
│     │        │  │  │  │  ├─ setuptools_build.cpython-313.pyc
│     │        │  │  │  │  ├─ subprocess.cpython-313.pyc
│     │        │  │  │  │  ├─ temp_dir.cpython-313.pyc
│     │        │  │  │  │  ├─ unpacking.cpython-313.pyc
│     │        │  │  │  │  ├─ urls.cpython-313.pyc
│     │        │  │  │  │  ├─ virtualenv.cpython-313.pyc
│     │        │  │  │  │  └─ wheel.cpython-313.pyc
│     │        │  │  │  ├─ _jaraco_text.py
│     │        │  │  │  ├─ _log.py
│     │        │  │  │  ├─ appdirs.py
│     │        │  │  │  ├─ compat.py
│     │        │  │  │  ├─ compatibility_tags.py
│     │        │  │  │  ├─ datetime.py
│     │        │  │  │  ├─ deprecation.py
│     │        │  │  │  ├─ direct_url_helpers.py
│     │        │  │  │  ├─ egg_link.py
│     │        │  │  │  ├─ entrypoints.py
│     │        │  │  │  ├─ filesystem.py
│     │        │  │  │  ├─ filetypes.py
│     │        │  │  │  ├─ glibc.py
│     │        │  │  │  ├─ hashes.py
│     │        │  │  │  ├─ logging.py
│     │        │  │  │  ├─ misc.py
│     │        │  │  │  ├─ packaging.py
│     │        │  │  │  ├─ retry.py
│     │        │  │  │  ├─ setuptools_build.py
│     │        │  │  │  ├─ subprocess.py
│     │        │  │  │  ├─ temp_dir.py
│     │        │  │  │  ├─ unpacking.py
│     │        │  │  │  ├─ urls.py
│     │        │  │  │  ├─ virtualenv.py
│     │        │  │  │  └─ wheel.py
│     │        │  │  ├─ vcs
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ bazaar.cpython-313.pyc
│     │        │  │  │  │  ├─ git.cpython-313.pyc
│     │        │  │  │  │  ├─ mercurial.cpython-313.pyc
│     │        │  │  │  │  ├─ subversion.cpython-313.pyc
│     │        │  │  │  │  └─ versioncontrol.cpython-313.pyc
│     │        │  │  │  ├─ bazaar.py
│     │        │  │  │  ├─ git.py
│     │        │  │  │  ├─ mercurial.py
│     │        │  │  │  ├─ subversion.py
│     │        │  │  │  └─ versioncontrol.py
│     │        │  │  └─ wheel_builder.py
│     │        │  ├─ _vendor
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  └─ typing_extensions.cpython-313.pyc
│     │        │  │  ├─ cachecontrol
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _cmd.cpython-313.pyc
│     │        │  │  │  │  ├─ adapter.cpython-313.pyc
│     │        │  │  │  │  ├─ cache.cpython-313.pyc
│     │        │  │  │  │  ├─ controller.cpython-313.pyc
│     │        │  │  │  │  ├─ filewrapper.cpython-313.pyc
│     │        │  │  │  │  ├─ heuristics.cpython-313.pyc
│     │        │  │  │  │  ├─ serialize.cpython-313.pyc
│     │        │  │  │  │  └─ wrapper.cpython-313.pyc
│     │        │  │  │  ├─ _cmd.py
│     │        │  │  │  ├─ adapter.py
│     │        │  │  │  ├─ cache.py
│     │        │  │  │  ├─ caches
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ file_cache.cpython-313.pyc
│     │        │  │  │  │  │  └─ redis_cache.cpython-313.pyc
│     │        │  │  │  │  ├─ file_cache.py
│     │        │  │  │  │  └─ redis_cache.py
│     │        │  │  │  ├─ controller.py
│     │        │  │  │  ├─ filewrapper.py
│     │        │  │  │  ├─ heuristics.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ serialize.py
│     │        │  │  │  └─ wrapper.py
│     │        │  │  ├─ certifi
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __main__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  │  │  └─ core.cpython-313.pyc
│     │        │  │  │  ├─ cacert.pem
│     │        │  │  │  ├─ core.py
│     │        │  │  │  └─ py.typed
│     │        │  │  ├─ distlib
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ compat.cpython-313.pyc
│     │        │  │  │  │  ├─ database.cpython-313.pyc
│     │        │  │  │  │  ├─ index.cpython-313.pyc
│     │        │  │  │  │  ├─ locators.cpython-313.pyc
│     │        │  │  │  │  ├─ manifest.cpython-313.pyc
│     │        │  │  │  │  ├─ markers.cpython-313.pyc
│     │        │  │  │  │  ├─ metadata.cpython-313.pyc
│     │        │  │  │  │  ├─ resources.cpython-313.pyc
│     │        │  │  │  │  ├─ scripts.cpython-313.pyc
│     │        │  │  │  │  ├─ util.cpython-313.pyc
│     │        │  │  │  │  ├─ version.cpython-313.pyc
│     │        │  │  │  │  └─ wheel.cpython-313.pyc
│     │        │  │  │  ├─ compat.py
│     │        │  │  │  ├─ database.py
│     │        │  │  │  ├─ index.py
│     │        │  │  │  ├─ locators.py
│     │        │  │  │  ├─ manifest.py
│     │        │  │  │  ├─ markers.py
│     │        │  │  │  ├─ metadata.py
│     │        │  │  │  ├─ resources.py
│     │        │  │  │  ├─ scripts.py
│     │        │  │  │  ├─ t32.exe
│     │        │  │  │  ├─ t64-arm.exe
│     │        │  │  │  ├─ t64.exe
│     │        │  │  │  ├─ util.py
│     │        │  │  │  ├─ version.py
│     │        │  │  │  ├─ w32.exe
│     │        │  │  │  ├─ w64-arm.exe
│     │        │  │  │  ├─ w64.exe
│     │        │  │  │  └─ wheel.py
│     │        │  │  ├─ distro
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __main__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  │  │  └─ distro.cpython-313.pyc
│     │        │  │  │  ├─ distro.py
│     │        │  │  │  └─ py.typed
│     │        │  │  ├─ idna
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ codec.cpython-313.pyc
│     │        │  │  │  │  ├─ compat.cpython-313.pyc
│     │        │  │  │  │  ├─ core.cpython-313.pyc
│     │        │  │  │  │  ├─ idnadata.cpython-313.pyc
│     │        │  │  │  │  ├─ intranges.cpython-313.pyc
│     │        │  │  │  │  ├─ package_data.cpython-313.pyc
│     │        │  │  │  │  └─ uts46data.cpython-313.pyc
│     │        │  │  │  ├─ codec.py
│     │        │  │  │  ├─ compat.py
│     │        │  │  │  ├─ core.py
│     │        │  │  │  ├─ idnadata.py
│     │        │  │  │  ├─ intranges.py
│     │        │  │  │  ├─ package_data.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  └─ uts46data.py
│     │        │  │  ├─ msgpack
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  │  │  ├─ ext.cpython-313.pyc
│     │        │  │  │  │  └─ fallback.cpython-313.pyc
│     │        │  │  │  ├─ exceptions.py
│     │        │  │  │  ├─ ext.py
│     │        │  │  │  └─ fallback.py
│     │        │  │  ├─ packaging
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _elffile.cpython-313.pyc
│     │        │  │  │  │  ├─ _manylinux.cpython-313.pyc
│     │        │  │  │  │  ├─ _musllinux.cpython-313.pyc
│     │        │  │  │  │  ├─ _parser.cpython-313.pyc
│     │        │  │  │  │  ├─ _structures.cpython-313.pyc
│     │        │  │  │  │  ├─ _tokenizer.cpython-313.pyc
│     │        │  │  │  │  ├─ markers.cpython-313.pyc
│     │        │  │  │  │  ├─ metadata.cpython-313.pyc
│     │        │  │  │  │  ├─ requirements.cpython-313.pyc
│     │        │  │  │  │  ├─ specifiers.cpython-313.pyc
│     │        │  │  │  │  ├─ tags.cpython-313.pyc
│     │        │  │  │  │  ├─ utils.cpython-313.pyc
│     │        │  │  │  │  └─ version.cpython-313.pyc
│     │        │  │  │  ├─ _elffile.py
│     │        │  │  │  ├─ _manylinux.py
│     │        │  │  │  ├─ _musllinux.py
│     │        │  │  │  ├─ _parser.py
│     │        │  │  │  ├─ _structures.py
│     │        │  │  │  ├─ _tokenizer.py
│     │        │  │  │  ├─ licenses
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  └─ _spdx.cpython-313.pyc
│     │        │  │  │  │  └─ _spdx.py
│     │        │  │  │  ├─ markers.py
│     │        │  │  │  ├─ metadata.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ requirements.py
│     │        │  │  │  ├─ specifiers.py
│     │        │  │  │  ├─ tags.py
│     │        │  │  │  ├─ utils.py
│     │        │  │  │  └─ version.py
│     │        │  │  ├─ pkg_resources
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  └─ __pycache__
│     │        │  │  │     └─ __init__.cpython-313.pyc
│     │        │  │  ├─ platformdirs
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __main__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  │  │  ├─ android.cpython-313.pyc
│     │        │  │  │  │  ├─ api.cpython-313.pyc
│     │        │  │  │  │  ├─ macos.cpython-313.pyc
│     │        │  │  │  │  ├─ unix.cpython-313.pyc
│     │        │  │  │  │  ├─ version.cpython-313.pyc
│     │        │  │  │  │  └─ windows.cpython-313.pyc
│     │        │  │  │  ├─ android.py
│     │        │  │  │  ├─ api.py
│     │        │  │  │  ├─ macos.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ unix.py
│     │        │  │  │  ├─ version.py
│     │        │  │  │  └─ windows.py
│     │        │  │  ├─ pygments
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __main__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  │  │  ├─ cmdline.cpython-313.pyc
│     │        │  │  │  │  ├─ console.cpython-313.pyc
│     │        │  │  │  │  ├─ filter.cpython-313.pyc
│     │        │  │  │  │  ├─ formatter.cpython-313.pyc
│     │        │  │  │  │  ├─ lexer.cpython-313.pyc
│     │        │  │  │  │  ├─ modeline.cpython-313.pyc
│     │        │  │  │  │  ├─ plugin.cpython-313.pyc
│     │        │  │  │  │  ├─ regexopt.cpython-313.pyc
│     │        │  │  │  │  ├─ scanner.cpython-313.pyc
│     │        │  │  │  │  ├─ sphinxext.cpython-313.pyc
│     │        │  │  │  │  ├─ style.cpython-313.pyc
│     │        │  │  │  │  ├─ token.cpython-313.pyc
│     │        │  │  │  │  ├─ unistring.cpython-313.pyc
│     │        │  │  │  │  └─ util.cpython-313.pyc
│     │        │  │  │  ├─ cmdline.py
│     │        │  │  │  ├─ console.py
│     │        │  │  │  ├─ filter.py
│     │        │  │  │  ├─ filters
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  └─ __pycache__
│     │        │  │  │  │     └─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ formatter.py
│     │        │  │  │  ├─ formatters
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ _mapping.cpython-313.pyc
│     │        │  │  │  │  │  ├─ bbcode.cpython-313.pyc
│     │        │  │  │  │  │  ├─ groff.cpython-313.pyc
│     │        │  │  │  │  │  ├─ html.cpython-313.pyc
│     │        │  │  │  │  │  ├─ img.cpython-313.pyc
│     │        │  │  │  │  │  ├─ irc.cpython-313.pyc
│     │        │  │  │  │  │  ├─ latex.cpython-313.pyc
│     │        │  │  │  │  │  ├─ other.cpython-313.pyc
│     │        │  │  │  │  │  ├─ pangomarkup.cpython-313.pyc
│     │        │  │  │  │  │  ├─ rtf.cpython-313.pyc
│     │        │  │  │  │  │  ├─ svg.cpython-313.pyc
│     │        │  │  │  │  │  ├─ terminal.cpython-313.pyc
│     │        │  │  │  │  │  └─ terminal256.cpython-313.pyc
│     │        │  │  │  │  ├─ _mapping.py
│     │        │  │  │  │  ├─ bbcode.py
│     │        │  │  │  │  ├─ groff.py
│     │        │  │  │  │  ├─ html.py
│     │        │  │  │  │  ├─ img.py
│     │        │  │  │  │  ├─ irc.py
│     │        │  │  │  │  ├─ latex.py
│     │        │  │  │  │  ├─ other.py
│     │        │  │  │  │  ├─ pangomarkup.py
│     │        │  │  │  │  ├─ rtf.py
│     │        │  │  │  │  ├─ svg.py
│     │        │  │  │  │  ├─ terminal.py
│     │        │  │  │  │  └─ terminal256.py
│     │        │  │  │  ├─ lexer.py
│     │        │  │  │  ├─ lexers
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ _mapping.cpython-313.pyc
│     │        │  │  │  │  │  └─ python.cpython-313.pyc
│     │        │  │  │  │  ├─ _mapping.py
│     │        │  │  │  │  └─ python.py
│     │        │  │  │  ├─ modeline.py
│     │        │  │  │  ├─ plugin.py
│     │        │  │  │  ├─ regexopt.py
│     │        │  │  │  ├─ scanner.py
│     │        │  │  │  ├─ sphinxext.py
│     │        │  │  │  ├─ style.py
│     │        │  │  │  ├─ styles
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  └─ _mapping.cpython-313.pyc
│     │        │  │  │  │  └─ _mapping.py
│     │        │  │  │  ├─ token.py
│     │        │  │  │  ├─ unistring.py
│     │        │  │  │  └─ util.py
│     │        │  │  ├─ pyproject_hooks
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  └─ _impl.cpython-313.pyc
│     │        │  │  │  ├─ _impl.py
│     │        │  │  │  ├─ _in_process
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  └─ _in_process.cpython-313.pyc
│     │        │  │  │  │  └─ _in_process.py
│     │        │  │  │  └─ py.typed
│     │        │  │  ├─ requests
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ __version__.cpython-313.pyc
│     │        │  │  │  │  ├─ _internal_utils.cpython-313.pyc
│     │        │  │  │  │  ├─ adapters.cpython-313.pyc
│     │        │  │  │  │  ├─ api.cpython-313.pyc
│     │        │  │  │  │  ├─ auth.cpython-313.pyc
│     │        │  │  │  │  ├─ certs.cpython-313.pyc
│     │        │  │  │  │  ├─ compat.cpython-313.pyc
│     │        │  │  │  │  ├─ cookies.cpython-313.pyc
│     │        │  │  │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  │  │  ├─ help.cpython-313.pyc
│     │        │  │  │  │  ├─ hooks.cpython-313.pyc
│     │        │  │  │  │  ├─ models.cpython-313.pyc
│     │        │  │  │  │  ├─ packages.cpython-313.pyc
│     │        │  │  │  │  ├─ sessions.cpython-313.pyc
│     │        │  │  │  │  ├─ status_codes.cpython-313.pyc
│     │        │  │  │  │  ├─ structures.cpython-313.pyc
│     │        │  │  │  │  └─ utils.cpython-313.pyc
│     │        │  │  │  ├─ __version__.py
│     │        │  │  │  ├─ _internal_utils.py
│     │        │  │  │  ├─ adapters.py
│     │        │  │  │  ├─ api.py
│     │        │  │  │  ├─ auth.py
│     │        │  │  │  ├─ certs.py
│     │        │  │  │  ├─ compat.py
│     │        │  │  │  ├─ cookies.py
│     │        │  │  │  ├─ exceptions.py
│     │        │  │  │  ├─ help.py
│     │        │  │  │  ├─ hooks.py
│     │        │  │  │  ├─ models.py
│     │        │  │  │  ├─ packages.py
│     │        │  │  │  ├─ sessions.py
│     │        │  │  │  ├─ status_codes.py
│     │        │  │  │  ├─ structures.py
│     │        │  │  │  └─ utils.py
│     │        │  │  ├─ resolvelib
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ providers.cpython-313.pyc
│     │        │  │  │  │  ├─ reporters.cpython-313.pyc
│     │        │  │  │  │  ├─ resolvers.cpython-313.pyc
│     │        │  │  │  │  └─ structs.cpython-313.pyc
│     │        │  │  │  ├─ compat
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  └─ collections_abc.cpython-313.pyc
│     │        │  │  │  │  └─ collections_abc.py
│     │        │  │  │  ├─ providers.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ reporters.py
│     │        │  │  │  ├─ resolvers.py
│     │        │  │  │  └─ structs.py
│     │        │  │  ├─ rich
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __main__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  │  │  ├─ _cell_widths.cpython-313.pyc
│     │        │  │  │  │  ├─ _emoji_codes.cpython-313.pyc
│     │        │  │  │  │  ├─ _emoji_replace.cpython-313.pyc
│     │        │  │  │  │  ├─ _export_format.cpython-313.pyc
│     │        │  │  │  │  ├─ _extension.cpython-313.pyc
│     │        │  │  │  │  ├─ _fileno.cpython-313.pyc
│     │        │  │  │  │  ├─ _inspect.cpython-313.pyc
│     │        │  │  │  │  ├─ _log_render.cpython-313.pyc
│     │        │  │  │  │  ├─ _loop.cpython-313.pyc
│     │        │  │  │  │  ├─ _null_file.cpython-313.pyc
│     │        │  │  │  │  ├─ _palettes.cpython-313.pyc
│     │        │  │  │  │  ├─ _pick.cpython-313.pyc
│     │        │  │  │  │  ├─ _ratio.cpython-313.pyc
│     │        │  │  │  │  ├─ _spinners.cpython-313.pyc
│     │        │  │  │  │  ├─ _stack.cpython-313.pyc
│     │        │  │  │  │  ├─ _timer.cpython-313.pyc
│     │        │  │  │  │  ├─ _win32_console.cpython-313.pyc
│     │        │  │  │  │  ├─ _windows.cpython-313.pyc
│     │        │  │  │  │  ├─ _windows_renderer.cpython-313.pyc
│     │        │  │  │  │  ├─ _wrap.cpython-313.pyc
│     │        │  │  │  │  ├─ abc.cpython-313.pyc
│     │        │  │  │  │  ├─ align.cpython-313.pyc
│     │        │  │  │  │  ├─ ansi.cpython-313.pyc
│     │        │  │  │  │  ├─ bar.cpython-313.pyc
│     │        │  │  │  │  ├─ box.cpython-313.pyc
│     │        │  │  │  │  ├─ cells.cpython-313.pyc
│     │        │  │  │  │  ├─ color.cpython-313.pyc
│     │        │  │  │  │  ├─ color_triplet.cpython-313.pyc
│     │        │  │  │  │  ├─ columns.cpython-313.pyc
│     │        │  │  │  │  ├─ console.cpython-313.pyc
│     │        │  │  │  │  ├─ constrain.cpython-313.pyc
│     │        │  │  │  │  ├─ containers.cpython-313.pyc
│     │        │  │  │  │  ├─ control.cpython-313.pyc
│     │        │  │  │  │  ├─ default_styles.cpython-313.pyc
│     │        │  │  │  │  ├─ diagnose.cpython-313.pyc
│     │        │  │  │  │  ├─ emoji.cpython-313.pyc
│     │        │  │  │  │  ├─ errors.cpython-313.pyc
│     │        │  │  │  │  ├─ file_proxy.cpython-313.pyc
│     │        │  │  │  │  ├─ filesize.cpython-313.pyc
│     │        │  │  │  │  ├─ highlighter.cpython-313.pyc
│     │        │  │  │  │  ├─ json.cpython-313.pyc
│     │        │  │  │  │  ├─ jupyter.cpython-313.pyc
│     │        │  │  │  │  ├─ layout.cpython-313.pyc
│     │        │  │  │  │  ├─ live.cpython-313.pyc
│     │        │  │  │  │  ├─ live_render.cpython-313.pyc
│     │        │  │  │  │  ├─ logging.cpython-313.pyc
│     │        │  │  │  │  ├─ markup.cpython-313.pyc
│     │        │  │  │  │  ├─ measure.cpython-313.pyc
│     │        │  │  │  │  ├─ padding.cpython-313.pyc
│     │        │  │  │  │  ├─ pager.cpython-313.pyc
│     │        │  │  │  │  ├─ palette.cpython-313.pyc
│     │        │  │  │  │  ├─ panel.cpython-313.pyc
│     │        │  │  │  │  ├─ pretty.cpython-313.pyc
│     │        │  │  │  │  ├─ progress.cpython-313.pyc
│     │        │  │  │  │  ├─ progress_bar.cpython-313.pyc
│     │        │  │  │  │  ├─ prompt.cpython-313.pyc
│     │        │  │  │  │  ├─ protocol.cpython-313.pyc
│     │        │  │  │  │  ├─ region.cpython-313.pyc
│     │        │  │  │  │  ├─ repr.cpython-313.pyc
│     │        │  │  │  │  ├─ rule.cpython-313.pyc
│     │        │  │  │  │  ├─ scope.cpython-313.pyc
│     │        │  │  │  │  ├─ screen.cpython-313.pyc
│     │        │  │  │  │  ├─ segment.cpython-313.pyc
│     │        │  │  │  │  ├─ spinner.cpython-313.pyc
│     │        │  │  │  │  ├─ status.cpython-313.pyc
│     │        │  │  │  │  ├─ style.cpython-313.pyc
│     │        │  │  │  │  ├─ styled.cpython-313.pyc
│     │        │  │  │  │  ├─ syntax.cpython-313.pyc
│     │        │  │  │  │  ├─ table.cpython-313.pyc
│     │        │  │  │  │  ├─ terminal_theme.cpython-313.pyc
│     │        │  │  │  │  ├─ text.cpython-313.pyc
│     │        │  │  │  │  ├─ theme.cpython-313.pyc
│     │        │  │  │  │  ├─ themes.cpython-313.pyc
│     │        │  │  │  │  ├─ traceback.cpython-313.pyc
│     │        │  │  │  │  └─ tree.cpython-313.pyc
│     │        │  │  │  ├─ _cell_widths.py
│     │        │  │  │  ├─ _emoji_codes.py
│     │        │  │  │  ├─ _emoji_replace.py
│     │        │  │  │  ├─ _export_format.py
│     │        │  │  │  ├─ _extension.py
│     │        │  │  │  ├─ _fileno.py
│     │        │  │  │  ├─ _inspect.py
│     │        │  │  │  ├─ _log_render.py
│     │        │  │  │  ├─ _loop.py
│     │        │  │  │  ├─ _null_file.py
│     │        │  │  │  ├─ _palettes.py
│     │        │  │  │  ├─ _pick.py
│     │        │  │  │  ├─ _ratio.py
│     │        │  │  │  ├─ _spinners.py
│     │        │  │  │  ├─ _stack.py
│     │        │  │  │  ├─ _timer.py
│     │        │  │  │  ├─ _win32_console.py
│     │        │  │  │  ├─ _windows.py
│     │        │  │  │  ├─ _windows_renderer.py
│     │        │  │  │  ├─ _wrap.py
│     │        │  │  │  ├─ abc.py
│     │        │  │  │  ├─ align.py
│     │        │  │  │  ├─ ansi.py
│     │        │  │  │  ├─ bar.py
│     │        │  │  │  ├─ box.py
│     │        │  │  │  ├─ cells.py
│     │        │  │  │  ├─ color.py
│     │        │  │  │  ├─ color_triplet.py
│     │        │  │  │  ├─ columns.py
│     │        │  │  │  ├─ console.py
│     │        │  │  │  ├─ constrain.py
│     │        │  │  │  ├─ containers.py
│     │        │  │  │  ├─ control.py
│     │        │  │  │  ├─ default_styles.py
│     │        │  │  │  ├─ diagnose.py
│     │        │  │  │  ├─ emoji.py
│     │        │  │  │  ├─ errors.py
│     │        │  │  │  ├─ file_proxy.py
│     │        │  │  │  ├─ filesize.py
│     │        │  │  │  ├─ highlighter.py
│     │        │  │  │  ├─ json.py
│     │        │  │  │  ├─ jupyter.py
│     │        │  │  │  ├─ layout.py
│     │        │  │  │  ├─ live.py
│     │        │  │  │  ├─ live_render.py
│     │        │  │  │  ├─ logging.py
│     │        │  │  │  ├─ markup.py
│     │        │  │  │  ├─ measure.py
│     │        │  │  │  ├─ padding.py
│     │        │  │  │  ├─ pager.py
│     │        │  │  │  ├─ palette.py
│     │        │  │  │  ├─ panel.py
│     │        │  │  │  ├─ pretty.py
│     │        │  │  │  ├─ progress.py
│     │        │  │  │  ├─ progress_bar.py
│     │        │  │  │  ├─ prompt.py
│     │        │  │  │  ├─ protocol.py
│     │        │  │  │  ├─ py.typed
│     │        │  │  │  ├─ region.py
│     │        │  │  │  ├─ repr.py
│     │        │  │  │  ├─ rule.py
│     │        │  │  │  ├─ scope.py
│     │        │  │  │  ├─ screen.py
│     │        │  │  │  ├─ segment.py
│     │        │  │  │  ├─ spinner.py
│     │        │  │  │  ├─ status.py
│     │        │  │  │  ├─ style.py
│     │        │  │  │  ├─ styled.py
│     │        │  │  │  ├─ syntax.py
│     │        │  │  │  ├─ table.py
│     │        │  │  │  ├─ terminal_theme.py
│     │        │  │  │  ├─ text.py
│     │        │  │  │  ├─ theme.py
│     │        │  │  │  ├─ themes.py
│     │        │  │  │  ├─ traceback.py
│     │        │  │  │  └─ tree.py
│     │        │  │  ├─ tomli
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _parser.cpython-313.pyc
│     │        │  │  │  │  ├─ _re.cpython-313.pyc
│     │        │  │  │  │  └─ _types.cpython-313.pyc
│     │        │  │  │  ├─ _parser.py
│     │        │  │  │  ├─ _re.py
│     │        │  │  │  ├─ _types.py
│     │        │  │  │  └─ py.typed
│     │        │  │  ├─ truststore
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _api.cpython-313.pyc
│     │        │  │  │  │  ├─ _macos.cpython-313.pyc
│     │        │  │  │  │  ├─ _openssl.cpython-313.pyc
│     │        │  │  │  │  ├─ _ssl_constants.cpython-313.pyc
│     │        │  │  │  │  └─ _windows.cpython-313.pyc
│     │        │  │  │  ├─ _api.py
│     │        │  │  │  ├─ _macos.py
│     │        │  │  │  ├─ _openssl.py
│     │        │  │  │  ├─ _ssl_constants.py
│     │        │  │  │  ├─ _windows.py
│     │        │  │  │  └─ py.typed
│     │        │  │  ├─ typing_extensions.py
│     │        │  │  ├─ urllib3
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ _collections.cpython-313.pyc
│     │        │  │  │  │  ├─ _version.cpython-313.pyc
│     │        │  │  │  │  ├─ connection.cpython-313.pyc
│     │        │  │  │  │  ├─ connectionpool.cpython-313.pyc
│     │        │  │  │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  │  │  ├─ fields.cpython-313.pyc
│     │        │  │  │  │  ├─ filepost.cpython-313.pyc
│     │        │  │  │  │  ├─ poolmanager.cpython-313.pyc
│     │        │  │  │  │  ├─ request.cpython-313.pyc
│     │        │  │  │  │  └─ response.cpython-313.pyc
│     │        │  │  │  ├─ _collections.py
│     │        │  │  │  ├─ _version.py
│     │        │  │  │  ├─ connection.py
│     │        │  │  │  ├─ connectionpool.py
│     │        │  │  │  ├─ contrib
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  ├─ _appengine_environ.cpython-313.pyc
│     │        │  │  │  │  │  ├─ appengine.cpython-313.pyc
│     │        │  │  │  │  │  ├─ ntlmpool.cpython-313.pyc
│     │        │  │  │  │  │  ├─ pyopenssl.cpython-313.pyc
│     │        │  │  │  │  │  ├─ securetransport.cpython-313.pyc
│     │        │  │  │  │  │  └─ socks.cpython-313.pyc
│     │        │  │  │  │  ├─ _appengine_environ.py
│     │        │  │  │  │  ├─ _securetransport
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ bindings.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ low_level.cpython-313.pyc
│     │        │  │  │  │  │  ├─ bindings.py
│     │        │  │  │  │  │  └─ low_level.py
│     │        │  │  │  │  ├─ appengine.py
│     │        │  │  │  │  ├─ ntlmpool.py
│     │        │  │  │  │  ├─ pyopenssl.py
│     │        │  │  │  │  ├─ securetransport.py
│     │        │  │  │  │  └─ socks.py
│     │        │  │  │  ├─ exceptions.py
│     │        │  │  │  ├─ fields.py
│     │        │  │  │  ├─ filepost.py
│     │        │  │  │  ├─ packages
│     │        │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  └─ six.cpython-313.pyc
│     │        │  │  │  │  ├─ backports
│     │        │  │  │  │  │  ├─ __init__.py
│     │        │  │  │  │  │  ├─ __pycache__
│     │        │  │  │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  │  │  ├─ makefile.cpython-313.pyc
│     │        │  │  │  │  │  │  └─ weakref_finalize.cpython-313.pyc
│     │        │  │  │  │  │  ├─ makefile.py
│     │        │  │  │  │  │  └─ weakref_finalize.py
│     │        │  │  │  │  └─ six.py
│     │        │  │  │  ├─ poolmanager.py
│     │        │  │  │  ├─ request.py
│     │        │  │  │  ├─ response.py
│     │        │  │  │  └─ util
│     │        │  │  │     ├─ __init__.py
│     │        │  │  │     ├─ __pycache__
│     │        │  │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │  │     │  ├─ connection.cpython-313.pyc
│     │        │  │  │     │  ├─ proxy.cpython-313.pyc
│     │        │  │  │     │  ├─ queue.cpython-313.pyc
│     │        │  │  │     │  ├─ request.cpython-313.pyc
│     │        │  │  │     │  ├─ response.cpython-313.pyc
│     │        │  │  │     │  ├─ retry.cpython-313.pyc
│     │        │  │  │     │  ├─ ssl_.cpython-313.pyc
│     │        │  │  │     │  ├─ ssl_match_hostname.cpython-313.pyc
│     │        │  │  │     │  ├─ ssltransport.cpython-313.pyc
│     │        │  │  │     │  ├─ timeout.cpython-313.pyc
│     │        │  │  │     │  ├─ url.cpython-313.pyc
│     │        │  │  │     │  └─ wait.cpython-313.pyc
│     │        │  │  │     ├─ connection.py
│     │        │  │  │     ├─ proxy.py
│     │        │  │  │     ├─ queue.py
│     │        │  │  │     ├─ request.py
│     │        │  │  │     ├─ response.py
│     │        │  │  │     ├─ retry.py
│     │        │  │  │     ├─ ssl_.py
│     │        │  │  │     ├─ ssl_match_hostname.py
│     │        │  │  │     ├─ ssltransport.py
│     │        │  │  │     ├─ timeout.py
│     │        │  │  │     ├─ url.py
│     │        │  │  │     └─ wait.py
│     │        │  │  └─ vendor.txt
│     │        │  └─ py.typed
│     │        ├─ pip-25.0.1.dist-info
│     │        │  ├─ AUTHORS.txt
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE.txt
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ REQUESTED
│     │        │  ├─ WHEEL
│     │        │  ├─ entry_points.txt
│     │        │  └─ top_level.txt
│     │        ├─ proto
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _file_info.cpython-313.pyc
│     │        │  │  ├─ _package_info.cpython-313.pyc
│     │        │  │  ├─ datetime_helpers.cpython-313.pyc
│     │        │  │  ├─ enums.cpython-313.pyc
│     │        │  │  ├─ fields.cpython-313.pyc
│     │        │  │  ├─ message.cpython-313.pyc
│     │        │  │  ├─ modules.cpython-313.pyc
│     │        │  │  ├─ primitives.cpython-313.pyc
│     │        │  │  ├─ utils.cpython-313.pyc
│     │        │  │  └─ version.cpython-313.pyc
│     │        │  ├─ _file_info.py
│     │        │  ├─ _package_info.py
│     │        │  ├─ datetime_helpers.py
│     │        │  ├─ enums.py
│     │        │  ├─ fields.py
│     │        │  ├─ marshal
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ compat.cpython-313.pyc
│     │        │  │  │  └─ marshal.cpython-313.pyc
│     │        │  │  ├─ collections
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ maps.cpython-313.pyc
│     │        │  │  │  │  └─ repeated.cpython-313.pyc
│     │        │  │  │  ├─ maps.py
│     │        │  │  │  └─ repeated.py
│     │        │  │  ├─ compat.py
│     │        │  │  ├─ marshal.py
│     │        │  │  └─ rules
│     │        │  │     ├─ __init__.py
│     │        │  │     ├─ __pycache__
│     │        │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  ├─ bytes.cpython-313.pyc
│     │        │  │     │  ├─ dates.cpython-313.pyc
│     │        │  │     │  ├─ enums.cpython-313.pyc
│     │        │  │     │  ├─ field_mask.cpython-313.pyc
│     │        │  │     │  ├─ message.cpython-313.pyc
│     │        │  │     │  ├─ stringy_numbers.cpython-313.pyc
│     │        │  │     │  ├─ struct.cpython-313.pyc
│     │        │  │     │  └─ wrappers.cpython-313.pyc
│     │        │  │     ├─ bytes.py
│     │        │  │     ├─ dates.py
│     │        │  │     ├─ enums.py
│     │        │  │     ├─ field_mask.py
│     │        │  │     ├─ message.py
│     │        │  │     ├─ stringy_numbers.py
│     │        │  │     ├─ struct.py
│     │        │  │     └─ wrappers.py
│     │        │  ├─ message.py
│     │        │  ├─ modules.py
│     │        │  ├─ primitives.py
│     │        │  ├─ utils.py
│     │        │  └─ version.py
│     │        ├─ proto_plus-1.26.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ top_level.txt
│     │        ├─ protobuf-5.29.5.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  └─ WHEEL
│     │        ├─ pyasn1
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ debug.cpython-313.pyc
│     │        │  │  └─ error.cpython-313.pyc
│     │        │  ├─ codec
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  └─ streaming.cpython-313.pyc
│     │        │  │  ├─ ber
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ decoder.cpython-313.pyc
│     │        │  │  │  │  ├─ encoder.cpython-313.pyc
│     │        │  │  │  │  └─ eoo.cpython-313.pyc
│     │        │  │  │  ├─ decoder.py
│     │        │  │  │  ├─ encoder.py
│     │        │  │  │  └─ eoo.py
│     │        │  │  ├─ cer
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ decoder.cpython-313.pyc
│     │        │  │  │  │  └─ encoder.cpython-313.pyc
│     │        │  │  │  ├─ decoder.py
│     │        │  │  │  └─ encoder.py
│     │        │  │  ├─ der
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ decoder.cpython-313.pyc
│     │        │  │  │  │  └─ encoder.cpython-313.pyc
│     │        │  │  │  ├─ decoder.py
│     │        │  │  │  └─ encoder.py
│     │        │  │  ├─ native
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ decoder.cpython-313.pyc
│     │        │  │  │  │  └─ encoder.cpython-313.pyc
│     │        │  │  │  ├─ decoder.py
│     │        │  │  │  └─ encoder.py
│     │        │  │  └─ streaming.py
│     │        │  ├─ compat
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  └─ integer.cpython-313.pyc
│     │        │  │  └─ integer.py
│     │        │  ├─ debug.py
│     │        │  ├─ error.py
│     │        │  └─ type
│     │        │     ├─ __init__.py
│     │        │     ├─ __pycache__
│     │        │     │  ├─ __init__.cpython-313.pyc
│     │        │     │  ├─ base.cpython-313.pyc
│     │        │     │  ├─ char.cpython-313.pyc
│     │        │     │  ├─ constraint.cpython-313.pyc
│     │        │     │  ├─ error.cpython-313.pyc
│     │        │     │  ├─ namedtype.cpython-313.pyc
│     │        │     │  ├─ namedval.cpython-313.pyc
│     │        │     │  ├─ opentype.cpython-313.pyc
│     │        │     │  ├─ tag.cpython-313.pyc
│     │        │     │  ├─ tagmap.cpython-313.pyc
│     │        │     │  ├─ univ.cpython-313.pyc
│     │        │     │  └─ useful.cpython-313.pyc
│     │        │     ├─ base.py
│     │        │     ├─ char.py
│     │        │     ├─ constraint.py
│     │        │     ├─ error.py
│     │        │     ├─ namedtype.py
│     │        │     ├─ namedval.py
│     │        │     ├─ opentype.py
│     │        │     ├─ tag.py
│     │        │     ├─ tagmap.py
│     │        │     ├─ univ.py
│     │        │     └─ useful.py
│     │        ├─ pyasn1-0.6.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE.rst
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ top_level.txt
│     │        │  └─ zip-safe
│     │        ├─ pyasn1_modules
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ pem.cpython-313.pyc
│     │        │  │  ├─ rfc1155.cpython-313.pyc
│     │        │  │  ├─ rfc1157.cpython-313.pyc
│     │        │  │  ├─ rfc1901.cpython-313.pyc
│     │        │  │  ├─ rfc1902.cpython-313.pyc
│     │        │  │  ├─ rfc1905.cpython-313.pyc
│     │        │  │  ├─ rfc2251.cpython-313.pyc
│     │        │  │  ├─ rfc2314.cpython-313.pyc
│     │        │  │  ├─ rfc2315.cpython-313.pyc
│     │        │  │  ├─ rfc2437.cpython-313.pyc
│     │        │  │  ├─ rfc2459.cpython-313.pyc
│     │        │  │  ├─ rfc2511.cpython-313.pyc
│     │        │  │  ├─ rfc2560.cpython-313.pyc
│     │        │  │  ├─ rfc2631.cpython-313.pyc
│     │        │  │  ├─ rfc2634.cpython-313.pyc
│     │        │  │  ├─ rfc2876.cpython-313.pyc
│     │        │  │  ├─ rfc2985.cpython-313.pyc
│     │        │  │  ├─ rfc2986.cpython-313.pyc
│     │        │  │  ├─ rfc3058.cpython-313.pyc
│     │        │  │  ├─ rfc3114.cpython-313.pyc
│     │        │  │  ├─ rfc3125.cpython-313.pyc
│     │        │  │  ├─ rfc3161.cpython-313.pyc
│     │        │  │  ├─ rfc3274.cpython-313.pyc
│     │        │  │  ├─ rfc3279.cpython-313.pyc
│     │        │  │  ├─ rfc3280.cpython-313.pyc
│     │        │  │  ├─ rfc3281.cpython-313.pyc
│     │        │  │  ├─ rfc3370.cpython-313.pyc
│     │        │  │  ├─ rfc3412.cpython-313.pyc
│     │        │  │  ├─ rfc3414.cpython-313.pyc
│     │        │  │  ├─ rfc3447.cpython-313.pyc
│     │        │  │  ├─ rfc3537.cpython-313.pyc
│     │        │  │  ├─ rfc3560.cpython-313.pyc
│     │        │  │  ├─ rfc3565.cpython-313.pyc
│     │        │  │  ├─ rfc3657.cpython-313.pyc
│     │        │  │  ├─ rfc3709.cpython-313.pyc
│     │        │  │  ├─ rfc3739.cpython-313.pyc
│     │        │  │  ├─ rfc3770.cpython-313.pyc
│     │        │  │  ├─ rfc3779.cpython-313.pyc
│     │        │  │  ├─ rfc3820.cpython-313.pyc
│     │        │  │  ├─ rfc3852.cpython-313.pyc
│     │        │  │  ├─ rfc4010.cpython-313.pyc
│     │        │  │  ├─ rfc4043.cpython-313.pyc
│     │        │  │  ├─ rfc4055.cpython-313.pyc
│     │        │  │  ├─ rfc4073.cpython-313.pyc
│     │        │  │  ├─ rfc4108.cpython-313.pyc
│     │        │  │  ├─ rfc4210.cpython-313.pyc
│     │        │  │  ├─ rfc4211.cpython-313.pyc
│     │        │  │  ├─ rfc4334.cpython-313.pyc
│     │        │  │  ├─ rfc4357.cpython-313.pyc
│     │        │  │  ├─ rfc4387.cpython-313.pyc
│     │        │  │  ├─ rfc4476.cpython-313.pyc
│     │        │  │  ├─ rfc4490.cpython-313.pyc
│     │        │  │  ├─ rfc4491.cpython-313.pyc
│     │        │  │  ├─ rfc4683.cpython-313.pyc
│     │        │  │  ├─ rfc4985.cpython-313.pyc
│     │        │  │  ├─ rfc5035.cpython-313.pyc
│     │        │  │  ├─ rfc5083.cpython-313.pyc
│     │        │  │  ├─ rfc5084.cpython-313.pyc
│     │        │  │  ├─ rfc5126.cpython-313.pyc
│     │        │  │  ├─ rfc5208.cpython-313.pyc
│     │        │  │  ├─ rfc5275.cpython-313.pyc
│     │        │  │  ├─ rfc5280.cpython-313.pyc
│     │        │  │  ├─ rfc5480.cpython-313.pyc
│     │        │  │  ├─ rfc5636.cpython-313.pyc
│     │        │  │  ├─ rfc5639.cpython-313.pyc
│     │        │  │  ├─ rfc5649.cpython-313.pyc
│     │        │  │  ├─ rfc5652.cpython-313.pyc
│     │        │  │  ├─ rfc5697.cpython-313.pyc
│     │        │  │  ├─ rfc5751.cpython-313.pyc
│     │        │  │  ├─ rfc5752.cpython-313.pyc
│     │        │  │  ├─ rfc5753.cpython-313.pyc
│     │        │  │  ├─ rfc5755.cpython-313.pyc
│     │        │  │  ├─ rfc5913.cpython-313.pyc
│     │        │  │  ├─ rfc5914.cpython-313.pyc
│     │        │  │  ├─ rfc5915.cpython-313.pyc
│     │        │  │  ├─ rfc5916.cpython-313.pyc
│     │        │  │  ├─ rfc5917.cpython-313.pyc
│     │        │  │  ├─ rfc5924.cpython-313.pyc
│     │        │  │  ├─ rfc5934.cpython-313.pyc
│     │        │  │  ├─ rfc5940.cpython-313.pyc
│     │        │  │  ├─ rfc5958.cpython-313.pyc
│     │        │  │  ├─ rfc5990.cpython-313.pyc
│     │        │  │  ├─ rfc6010.cpython-313.pyc
│     │        │  │  ├─ rfc6019.cpython-313.pyc
│     │        │  │  ├─ rfc6031.cpython-313.pyc
│     │        │  │  ├─ rfc6032.cpython-313.pyc
│     │        │  │  ├─ rfc6120.cpython-313.pyc
│     │        │  │  ├─ rfc6170.cpython-313.pyc
│     │        │  │  ├─ rfc6187.cpython-313.pyc
│     │        │  │  ├─ rfc6210.cpython-313.pyc
│     │        │  │  ├─ rfc6211.cpython-313.pyc
│     │        │  │  ├─ rfc6402.cpython-313.pyc
│     │        │  │  ├─ rfc6482.cpython-313.pyc
│     │        │  │  ├─ rfc6486.cpython-313.pyc
│     │        │  │  ├─ rfc6487.cpython-313.pyc
│     │        │  │  ├─ rfc6664.cpython-313.pyc
│     │        │  │  ├─ rfc6955.cpython-313.pyc
│     │        │  │  ├─ rfc6960.cpython-313.pyc
│     │        │  │  ├─ rfc7030.cpython-313.pyc
│     │        │  │  ├─ rfc7191.cpython-313.pyc
│     │        │  │  ├─ rfc7229.cpython-313.pyc
│     │        │  │  ├─ rfc7292.cpython-313.pyc
│     │        │  │  ├─ rfc7296.cpython-313.pyc
│     │        │  │  ├─ rfc7508.cpython-313.pyc
│     │        │  │  ├─ rfc7585.cpython-313.pyc
│     │        │  │  ├─ rfc7633.cpython-313.pyc
│     │        │  │  ├─ rfc7773.cpython-313.pyc
│     │        │  │  ├─ rfc7894.cpython-313.pyc
│     │        │  │  ├─ rfc7906.cpython-313.pyc
│     │        │  │  ├─ rfc7914.cpython-313.pyc
│     │        │  │  ├─ rfc8017.cpython-313.pyc
│     │        │  │  ├─ rfc8018.cpython-313.pyc
│     │        │  │  ├─ rfc8103.cpython-313.pyc
│     │        │  │  ├─ rfc8209.cpython-313.pyc
│     │        │  │  ├─ rfc8226.cpython-313.pyc
│     │        │  │  ├─ rfc8358.cpython-313.pyc
│     │        │  │  ├─ rfc8360.cpython-313.pyc
│     │        │  │  ├─ rfc8398.cpython-313.pyc
│     │        │  │  ├─ rfc8410.cpython-313.pyc
│     │        │  │  ├─ rfc8418.cpython-313.pyc
│     │        │  │  ├─ rfc8419.cpython-313.pyc
│     │        │  │  ├─ rfc8479.cpython-313.pyc
│     │        │  │  ├─ rfc8494.cpython-313.pyc
│     │        │  │  ├─ rfc8520.cpython-313.pyc
│     │        │  │  ├─ rfc8619.cpython-313.pyc
│     │        │  │  ├─ rfc8649.cpython-313.pyc
│     │        │  │  ├─ rfc8692.cpython-313.pyc
│     │        │  │  ├─ rfc8696.cpython-313.pyc
│     │        │  │  ├─ rfc8702.cpython-313.pyc
│     │        │  │  ├─ rfc8708.cpython-313.pyc
│     │        │  │  └─ rfc8769.cpython-313.pyc
│     │        │  ├─ pem.py
│     │        │  ├─ rfc1155.py
│     │        │  ├─ rfc1157.py
│     │        │  ├─ rfc1901.py
│     │        │  ├─ rfc1902.py
│     │        │  ├─ rfc1905.py
│     │        │  ├─ rfc2251.py
│     │        │  ├─ rfc2314.py
│     │        │  ├─ rfc2315.py
│     │        │  ├─ rfc2437.py
│     │        │  ├─ rfc2459.py
│     │        │  ├─ rfc2511.py
│     │        │  ├─ rfc2560.py
│     │        │  ├─ rfc2631.py
│     │        │  ├─ rfc2634.py
│     │        │  ├─ rfc2876.py
│     │        │  ├─ rfc2985.py
│     │        │  ├─ rfc2986.py
│     │        │  ├─ rfc3058.py
│     │        │  ├─ rfc3114.py
│     │        │  ├─ rfc3125.py
│     │        │  ├─ rfc3161.py
│     │        │  ├─ rfc3274.py
│     │        │  ├─ rfc3279.py
│     │        │  ├─ rfc3280.py
│     │        │  ├─ rfc3281.py
│     │        │  ├─ rfc3370.py
│     │        │  ├─ rfc3412.py
│     │        │  ├─ rfc3414.py
│     │        │  ├─ rfc3447.py
│     │        │  ├─ rfc3537.py
│     │        │  ├─ rfc3560.py
│     │        │  ├─ rfc3565.py
│     │        │  ├─ rfc3657.py
│     │        │  ├─ rfc3709.py
│     │        │  ├─ rfc3739.py
│     │        │  ├─ rfc3770.py
│     │        │  ├─ rfc3779.py
│     │        │  ├─ rfc3820.py
│     │        │  ├─ rfc3852.py
│     │        │  ├─ rfc4010.py
│     │        │  ├─ rfc4043.py
│     │        │  ├─ rfc4055.py
│     │        │  ├─ rfc4073.py
│     │        │  ├─ rfc4108.py
│     │        │  ├─ rfc4210.py
│     │        │  ├─ rfc4211.py
│     │        │  ├─ rfc4334.py
│     │        │  ├─ rfc4357.py
│     │        │  ├─ rfc4387.py
│     │        │  ├─ rfc4476.py
│     │        │  ├─ rfc4490.py
│     │        │  ├─ rfc4491.py
│     │        │  ├─ rfc4683.py
│     │        │  ├─ rfc4985.py
│     │        │  ├─ rfc5035.py
│     │        │  ├─ rfc5083.py
│     │        │  ├─ rfc5084.py
│     │        │  ├─ rfc5126.py
│     │        │  ├─ rfc5208.py
│     │        │  ├─ rfc5275.py
│     │        │  ├─ rfc5280.py
│     │        │  ├─ rfc5480.py
│     │        │  ├─ rfc5636.py
│     │        │  ├─ rfc5639.py
│     │        │  ├─ rfc5649.py
│     │        │  ├─ rfc5652.py
│     │        │  ├─ rfc5697.py
│     │        │  ├─ rfc5751.py
│     │        │  ├─ rfc5752.py
│     │        │  ├─ rfc5753.py
│     │        │  ├─ rfc5755.py
│     │        │  ├─ rfc5913.py
│     │        │  ├─ rfc5914.py
│     │        │  ├─ rfc5915.py
│     │        │  ├─ rfc5916.py
│     │        │  ├─ rfc5917.py
│     │        │  ├─ rfc5924.py
│     │        │  ├─ rfc5934.py
│     │        │  ├─ rfc5940.py
│     │        │  ├─ rfc5958.py
│     │        │  ├─ rfc5990.py
│     │        │  ├─ rfc6010.py
│     │        │  ├─ rfc6019.py
│     │        │  ├─ rfc6031.py
│     │        │  ├─ rfc6032.py
│     │        │  ├─ rfc6120.py
│     │        │  ├─ rfc6170.py
│     │        │  ├─ rfc6187.py
│     │        │  ├─ rfc6210.py
│     │        │  ├─ rfc6211.py
│     │        │  ├─ rfc6402.py
│     │        │  ├─ rfc6482.py
│     │        │  ├─ rfc6486.py
│     │        │  ├─ rfc6487.py
│     │        │  ├─ rfc6664.py
│     │        │  ├─ rfc6955.py
│     │        │  ├─ rfc6960.py
│     │        │  ├─ rfc7030.py
│     │        │  ├─ rfc7191.py
│     │        │  ├─ rfc7229.py
│     │        │  ├─ rfc7292.py
│     │        │  ├─ rfc7296.py
│     │        │  ├─ rfc7508.py
│     │        │  ├─ rfc7585.py
│     │        │  ├─ rfc7633.py
│     │        │  ├─ rfc7773.py
│     │        │  ├─ rfc7894.py
│     │        │  ├─ rfc7906.py
│     │        │  ├─ rfc7914.py
│     │        │  ├─ rfc8017.py
│     │        │  ├─ rfc8018.py
│     │        │  ├─ rfc8103.py
│     │        │  ├─ rfc8209.py
│     │        │  ├─ rfc8226.py
│     │        │  ├─ rfc8358.py
│     │        │  ├─ rfc8360.py
│     │        │  ├─ rfc8398.py
│     │        │  ├─ rfc8410.py
│     │        │  ├─ rfc8418.py
│     │        │  ├─ rfc8419.py
│     │        │  ├─ rfc8479.py
│     │        │  ├─ rfc8494.py
│     │        │  ├─ rfc8520.py
│     │        │  ├─ rfc8619.py
│     │        │  ├─ rfc8649.py
│     │        │  ├─ rfc8692.py
│     │        │  ├─ rfc8696.py
│     │        │  ├─ rfc8702.py
│     │        │  ├─ rfc8708.py
│     │        │  └─ rfc8769.py
│     │        ├─ pyasn1_modules-0.4.2.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE.txt
│     │        │  ├─ top_level.txt
│     │        │  └─ zip-safe
│     │        ├─ pydantic
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _migration.cpython-313.pyc
│     │        │  │  ├─ alias_generators.cpython-313.pyc
│     │        │  │  ├─ aliases.cpython-313.pyc
│     │        │  │  ├─ annotated_handlers.cpython-313.pyc
│     │        │  │  ├─ class_validators.cpython-313.pyc
│     │        │  │  ├─ color.cpython-313.pyc
│     │        │  │  ├─ config.cpython-313.pyc
│     │        │  │  ├─ dataclasses.cpython-313.pyc
│     │        │  │  ├─ datetime_parse.cpython-313.pyc
│     │        │  │  ├─ decorator.cpython-313.pyc
│     │        │  │  ├─ env_settings.cpython-313.pyc
│     │        │  │  ├─ error_wrappers.cpython-313.pyc
│     │        │  │  ├─ errors.cpython-313.pyc
│     │        │  │  ├─ fields.cpython-313.pyc
│     │        │  │  ├─ functional_serializers.cpython-313.pyc
│     │        │  │  ├─ functional_validators.cpython-313.pyc
│     │        │  │  ├─ generics.cpython-313.pyc
│     │        │  │  ├─ json.cpython-313.pyc
│     │        │  │  ├─ json_schema.cpython-313.pyc
│     │        │  │  ├─ main.cpython-313.pyc
│     │        │  │  ├─ mypy.cpython-313.pyc
│     │        │  │  ├─ networks.cpython-313.pyc
│     │        │  │  ├─ parse.cpython-313.pyc
│     │        │  │  ├─ root_model.cpython-313.pyc
│     │        │  │  ├─ schema.cpython-313.pyc
│     │        │  │  ├─ tools.cpython-313.pyc
│     │        │  │  ├─ type_adapter.cpython-313.pyc
│     │        │  │  ├─ types.cpython-313.pyc
│     │        │  │  ├─ typing.cpython-313.pyc
│     │        │  │  ├─ utils.cpython-313.pyc
│     │        │  │  ├─ validate_call_decorator.cpython-313.pyc
│     │        │  │  ├─ validators.cpython-313.pyc
│     │        │  │  ├─ version.cpython-313.pyc
│     │        │  │  └─ warnings.cpython-313.pyc
│     │        │  ├─ _internal
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _config.cpython-313.pyc
│     │        │  │  │  ├─ _core_metadata.cpython-313.pyc
│     │        │  │  │  ├─ _core_utils.cpython-313.pyc
│     │        │  │  │  ├─ _dataclasses.cpython-313.pyc
│     │        │  │  │  ├─ _decorators.cpython-313.pyc
│     │        │  │  │  ├─ _decorators_v1.cpython-313.pyc
│     │        │  │  │  ├─ _discriminated_union.cpython-313.pyc
│     │        │  │  │  ├─ _docs_extraction.cpython-313.pyc
│     │        │  │  │  ├─ _fields.cpython-313.pyc
│     │        │  │  │  ├─ _forward_ref.cpython-313.pyc
│     │        │  │  │  ├─ _generate_schema.cpython-313.pyc
│     │        │  │  │  ├─ _generics.cpython-313.pyc
│     │        │  │  │  ├─ _git.cpython-313.pyc
│     │        │  │  │  ├─ _import_utils.cpython-313.pyc
│     │        │  │  │  ├─ _internal_dataclass.cpython-313.pyc
│     │        │  │  │  ├─ _known_annotated_metadata.cpython-313.pyc
│     │        │  │  │  ├─ _mock_val_ser.cpython-313.pyc
│     │        │  │  │  ├─ _model_construction.cpython-313.pyc
│     │        │  │  │  ├─ _namespace_utils.cpython-313.pyc
│     │        │  │  │  ├─ _repr.cpython-313.pyc
│     │        │  │  │  ├─ _schema_gather.cpython-313.pyc
│     │        │  │  │  ├─ _schema_generation_shared.cpython-313.pyc
│     │        │  │  │  ├─ _serializers.cpython-313.pyc
│     │        │  │  │  ├─ _signature.cpython-313.pyc
│     │        │  │  │  ├─ _typing_extra.cpython-313.pyc
│     │        │  │  │  ├─ _utils.cpython-313.pyc
│     │        │  │  │  ├─ _validate_call.cpython-313.pyc
│     │        │  │  │  └─ _validators.cpython-313.pyc
│     │        │  │  ├─ _config.py
│     │        │  │  ├─ _core_metadata.py
│     │        │  │  ├─ _core_utils.py
│     │        │  │  ├─ _dataclasses.py
│     │        │  │  ├─ _decorators.py
│     │        │  │  ├─ _decorators_v1.py
│     │        │  │  ├─ _discriminated_union.py
│     │        │  │  ├─ _docs_extraction.py
│     │        │  │  ├─ _fields.py
│     │        │  │  ├─ _forward_ref.py
│     │        │  │  ├─ _generate_schema.py
│     │        │  │  ├─ _generics.py
│     │        │  │  ├─ _git.py
│     │        │  │  ├─ _import_utils.py
│     │        │  │  ├─ _internal_dataclass.py
│     │        │  │  ├─ _known_annotated_metadata.py
│     │        │  │  ├─ _mock_val_ser.py
│     │        │  │  ├─ _model_construction.py
│     │        │  │  ├─ _namespace_utils.py
│     │        │  │  ├─ _repr.py
│     │        │  │  ├─ _schema_gather.py
│     │        │  │  ├─ _schema_generation_shared.py
│     │        │  │  ├─ _serializers.py
│     │        │  │  ├─ _signature.py
│     │        │  │  ├─ _typing_extra.py
│     │        │  │  ├─ _utils.py
│     │        │  │  ├─ _validate_call.py
│     │        │  │  └─ _validators.py
│     │        │  ├─ _migration.py
│     │        │  ├─ alias_generators.py
│     │        │  ├─ aliases.py
│     │        │  ├─ annotated_handlers.py
│     │        │  ├─ class_validators.py
│     │        │  ├─ color.py
│     │        │  ├─ config.py
│     │        │  ├─ dataclasses.py
│     │        │  ├─ datetime_parse.py
│     │        │  ├─ decorator.py
│     │        │  ├─ deprecated
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ class_validators.cpython-313.pyc
│     │        │  │  │  ├─ config.cpython-313.pyc
│     │        │  │  │  ├─ copy_internals.cpython-313.pyc
│     │        │  │  │  ├─ decorator.cpython-313.pyc
│     │        │  │  │  ├─ json.cpython-313.pyc
│     │        │  │  │  ├─ parse.cpython-313.pyc
│     │        │  │  │  └─ tools.cpython-313.pyc
│     │        │  │  ├─ class_validators.py
│     │        │  │  ├─ config.py
│     │        │  │  ├─ copy_internals.py
│     │        │  │  ├─ decorator.py
│     │        │  │  ├─ json.py
│     │        │  │  ├─ parse.py
│     │        │  │  └─ tools.py
│     │        │  ├─ env_settings.py
│     │        │  ├─ error_wrappers.py
│     │        │  ├─ errors.py
│     │        │  ├─ experimental
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ arguments_schema.cpython-313.pyc
│     │        │  │  │  └─ pipeline.cpython-313.pyc
│     │        │  │  ├─ arguments_schema.py
│     │        │  │  └─ pipeline.py
│     │        │  ├─ fields.py
│     │        │  ├─ functional_serializers.py
│     │        │  ├─ functional_validators.py
│     │        │  ├─ generics.py
│     │        │  ├─ json.py
│     │        │  ├─ json_schema.py
│     │        │  ├─ main.py
│     │        │  ├─ mypy.py
│     │        │  ├─ networks.py
│     │        │  ├─ parse.py
│     │        │  ├─ plugin
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _loader.cpython-313.pyc
│     │        │  │  │  └─ _schema_validator.cpython-313.pyc
│     │        │  │  ├─ _loader.py
│     │        │  │  └─ _schema_validator.py
│     │        │  ├─ py.typed
│     │        │  ├─ root_model.py
│     │        │  ├─ schema.py
│     │        │  ├─ tools.py
│     │        │  ├─ type_adapter.py
│     │        │  ├─ types.py
│     │        │  ├─ typing.py
│     │        │  ├─ utils.py
│     │        │  ├─ v1
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ _hypothesis_plugin.cpython-313.pyc
│     │        │  │  │  ├─ annotated_types.cpython-313.pyc
│     │        │  │  │  ├─ class_validators.cpython-313.pyc
│     │        │  │  │  ├─ color.cpython-313.pyc
│     │        │  │  │  ├─ config.cpython-313.pyc
│     │        │  │  │  ├─ dataclasses.cpython-313.pyc
│     │        │  │  │  ├─ datetime_parse.cpython-313.pyc
│     │        │  │  │  ├─ decorator.cpython-313.pyc
│     │        │  │  │  ├─ env_settings.cpython-313.pyc
│     │        │  │  │  ├─ error_wrappers.cpython-313.pyc
│     │        │  │  │  ├─ errors.cpython-313.pyc
│     │        │  │  │  ├─ fields.cpython-313.pyc
│     │        │  │  │  ├─ generics.cpython-313.pyc
│     │        │  │  │  ├─ json.cpython-313.pyc
│     │        │  │  │  ├─ main.cpython-313.pyc
│     │        │  │  │  ├─ mypy.cpython-313.pyc
│     │        │  │  │  ├─ networks.cpython-313.pyc
│     │        │  │  │  ├─ parse.cpython-313.pyc
│     │        │  │  │  ├─ schema.cpython-313.pyc
│     │        │  │  │  ├─ tools.cpython-313.pyc
│     │        │  │  │  ├─ types.cpython-313.pyc
│     │        │  │  │  ├─ typing.cpython-313.pyc
│     │        │  │  │  ├─ utils.cpython-313.pyc
│     │        │  │  │  ├─ validators.cpython-313.pyc
│     │        │  │  │  └─ version.cpython-313.pyc
│     │        │  │  ├─ _hypothesis_plugin.py
│     │        │  │  ├─ annotated_types.py
│     │        │  │  ├─ class_validators.py
│     │        │  │  ├─ color.py
│     │        │  │  ├─ config.py
│     │        │  │  ├─ dataclasses.py
│     │        │  │  ├─ datetime_parse.py
│     │        │  │  ├─ decorator.py
│     │        │  │  ├─ env_settings.py
│     │        │  │  ├─ error_wrappers.py
│     │        │  │  ├─ errors.py
│     │        │  │  ├─ fields.py
│     │        │  │  ├─ generics.py
│     │        │  │  ├─ json.py
│     │        │  │  ├─ main.py
│     │        │  │  ├─ mypy.py
│     │        │  │  ├─ networks.py
│     │        │  │  ├─ parse.py
│     │        │  │  ├─ py.typed
│     │        │  │  ├─ schema.py
│     │        │  │  ├─ tools.py
│     │        │  │  ├─ types.py
│     │        │  │  ├─ typing.py
│     │        │  │  ├─ utils.py
│     │        │  │  ├─ validators.py
│     │        │  │  └─ version.py
│     │        │  ├─ validate_call_decorator.py
│     │        │  ├─ validators.py
│     │        │  ├─ version.py
│     │        │  └─ warnings.py
│     │        ├─ pydantic-2.11.9.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE
│     │        ├─ pydantic_core
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  └─ core_schema.cpython-313.pyc
│     │        │  ├─ _pydantic_core.cpython-313-darwin.so
│     │        │  ├─ _pydantic_core.pyi
│     │        │  ├─ core_schema.py
│     │        │  └─ py.typed
│     │        ├─ pydantic_core-2.33.2.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE
│     │        ├─ pyparsing
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ actions.cpython-313.pyc
│     │        │  │  ├─ common.cpython-313.pyc
│     │        │  │  ├─ core.cpython-313.pyc
│     │        │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  ├─ helpers.cpython-313.pyc
│     │        │  │  ├─ results.cpython-313.pyc
│     │        │  │  ├─ testing.cpython-313.pyc
│     │        │  │  ├─ unicode.cpython-313.pyc
│     │        │  │  └─ util.cpython-313.pyc
│     │        │  ├─ actions.py
│     │        │  ├─ common.py
│     │        │  ├─ core.py
│     │        │  ├─ diagram
│     │        │  │  ├─ __init__.py
│     │        │  │  └─ __pycache__
│     │        │  │     └─ __init__.cpython-313.pyc
│     │        │  ├─ exceptions.py
│     │        │  ├─ helpers.py
│     │        │  ├─ py.typed
│     │        │  ├─ results.py
│     │        │  ├─ testing.py
│     │        │  ├─ tools
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  └─ cvt_pyparsing_pep8_names.cpython-313.pyc
│     │        │  │  └─ cvt_pyparsing_pep8_names.py
│     │        │  ├─ unicode.py
│     │        │  └─ util.py
│     │        ├─ pyparsing-3.2.5.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE
│     │        ├─ python_dotenv-1.1.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ REQUESTED
│     │        │  ├─ WHEEL
│     │        │  ├─ entry_points.txt
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ requests
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __version__.cpython-313.pyc
│     │        │  │  ├─ _internal_utils.cpython-313.pyc
│     │        │  │  ├─ adapters.cpython-313.pyc
│     │        │  │  ├─ api.cpython-313.pyc
│     │        │  │  ├─ auth.cpython-313.pyc
│     │        │  │  ├─ certs.cpython-313.pyc
│     │        │  │  ├─ compat.cpython-313.pyc
│     │        │  │  ├─ cookies.cpython-313.pyc
│     │        │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  ├─ help.cpython-313.pyc
│     │        │  │  ├─ hooks.cpython-313.pyc
│     │        │  │  ├─ models.cpython-313.pyc
│     │        │  │  ├─ packages.cpython-313.pyc
│     │        │  │  ├─ sessions.cpython-313.pyc
│     │        │  │  ├─ status_codes.cpython-313.pyc
│     │        │  │  ├─ structures.cpython-313.pyc
│     │        │  │  └─ utils.cpython-313.pyc
│     │        │  ├─ __version__.py
│     │        │  ├─ _internal_utils.py
│     │        │  ├─ adapters.py
│     │        │  ├─ api.py
│     │        │  ├─ auth.py
│     │        │  ├─ certs.py
│     │        │  ├─ compat.py
│     │        │  ├─ cookies.py
│     │        │  ├─ exceptions.py
│     │        │  ├─ help.py
│     │        │  ├─ hooks.py
│     │        │  ├─ models.py
│     │        │  ├─ packages.py
│     │        │  ├─ sessions.py
│     │        │  ├─ status_codes.py
│     │        │  ├─ structures.py
│     │        │  └─ utils.py
│     │        ├─ requests-2.32.5.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ rsa
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ asn1.cpython-313.pyc
│     │        │  │  ├─ cli.cpython-313.pyc
│     │        │  │  ├─ common.cpython-313.pyc
│     │        │  │  ├─ core.cpython-313.pyc
│     │        │  │  ├─ key.cpython-313.pyc
│     │        │  │  ├─ parallel.cpython-313.pyc
│     │        │  │  ├─ pem.cpython-313.pyc
│     │        │  │  ├─ pkcs1.cpython-313.pyc
│     │        │  │  ├─ pkcs1_v2.cpython-313.pyc
│     │        │  │  ├─ prime.cpython-313.pyc
│     │        │  │  ├─ randnum.cpython-313.pyc
│     │        │  │  ├─ transform.cpython-313.pyc
│     │        │  │  └─ util.cpython-313.pyc
│     │        │  ├─ asn1.py
│     │        │  ├─ cli.py
│     │        │  ├─ common.py
│     │        │  ├─ core.py
│     │        │  ├─ key.py
│     │        │  ├─ parallel.py
│     │        │  ├─ pem.py
│     │        │  ├─ pkcs1.py
│     │        │  ├─ pkcs1_v2.py
│     │        │  ├─ prime.py
│     │        │  ├─ py.typed
│     │        │  ├─ randnum.py
│     │        │  ├─ transform.py
│     │        │  └─ util.py
│     │        ├─ rsa-4.9.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ entry_points.txt
│     │        ├─ sniffio
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _impl.cpython-313.pyc
│     │        │  │  └─ _version.cpython-313.pyc
│     │        │  ├─ _impl.py
│     │        │  ├─ _tests
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  └─ test_sniffio.cpython-313.pyc
│     │        │  │  └─ test_sniffio.py
│     │        │  ├─ _version.py
│     │        │  └─ py.typed
│     │        ├─ sniffio-1.3.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENSE
│     │        │  ├─ LICENSE.APACHE2
│     │        │  ├─ LICENSE.MIT
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ top_level.txt
│     │        ├─ starlette
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _exception_handler.cpython-313.pyc
│     │        │  │  ├─ _utils.cpython-313.pyc
│     │        │  │  ├─ applications.cpython-313.pyc
│     │        │  │  ├─ authentication.cpython-313.pyc
│     │        │  │  ├─ background.cpython-313.pyc
│     │        │  │  ├─ concurrency.cpython-313.pyc
│     │        │  │  ├─ config.cpython-313.pyc
│     │        │  │  ├─ convertors.cpython-313.pyc
│     │        │  │  ├─ datastructures.cpython-313.pyc
│     │        │  │  ├─ endpoints.cpython-313.pyc
│     │        │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  ├─ formparsers.cpython-313.pyc
│     │        │  │  ├─ requests.cpython-313.pyc
│     │        │  │  ├─ responses.cpython-313.pyc
│     │        │  │  ├─ routing.cpython-313.pyc
│     │        │  │  ├─ schemas.cpython-313.pyc
│     │        │  │  ├─ staticfiles.cpython-313.pyc
│     │        │  │  ├─ status.cpython-313.pyc
│     │        │  │  ├─ templating.cpython-313.pyc
│     │        │  │  ├─ testclient.cpython-313.pyc
│     │        │  │  ├─ types.cpython-313.pyc
│     │        │  │  └─ websockets.cpython-313.pyc
│     │        │  ├─ _exception_handler.py
│     │        │  ├─ _utils.py
│     │        │  ├─ applications.py
│     │        │  ├─ authentication.py
│     │        │  ├─ background.py
│     │        │  ├─ concurrency.py
│     │        │  ├─ config.py
│     │        │  ├─ convertors.py
│     │        │  ├─ datastructures.py
│     │        │  ├─ endpoints.py
│     │        │  ├─ exceptions.py
│     │        │  ├─ formparsers.py
│     │        │  ├─ middleware
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ authentication.cpython-313.pyc
│     │        │  │  │  ├─ base.cpython-313.pyc
│     │        │  │  │  ├─ cors.cpython-313.pyc
│     │        │  │  │  ├─ errors.cpython-313.pyc
│     │        │  │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  │  ├─ gzip.cpython-313.pyc
│     │        │  │  │  ├─ httpsredirect.cpython-313.pyc
│     │        │  │  │  ├─ sessions.cpython-313.pyc
│     │        │  │  │  ├─ trustedhost.cpython-313.pyc
│     │        │  │  │  └─ wsgi.cpython-313.pyc
│     │        │  │  ├─ authentication.py
│     │        │  │  ├─ base.py
│     │        │  │  ├─ cors.py
│     │        │  │  ├─ errors.py
│     │        │  │  ├─ exceptions.py
│     │        │  │  ├─ gzip.py
│     │        │  │  ├─ httpsredirect.py
│     │        │  │  ├─ sessions.py
│     │        │  │  ├─ trustedhost.py
│     │        │  │  └─ wsgi.py
│     │        │  ├─ py.typed
│     │        │  ├─ requests.py
│     │        │  ├─ responses.py
│     │        │  ├─ routing.py
│     │        │  ├─ schemas.py
│     │        │  ├─ staticfiles.py
│     │        │  ├─ status.py
│     │        │  ├─ templating.py
│     │        │  ├─ testclient.py
│     │        │  ├─ types.py
│     │        │  └─ websockets.py
│     │        ├─ starlette-0.48.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE.md
│     │        ├─ tqdm
│     │        │  ├─ __init__.py
│     │        │  ├─ __main__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  ├─ _dist_ver.cpython-313.pyc
│     │        │  │  ├─ _main.cpython-313.pyc
│     │        │  │  ├─ _monitor.cpython-313.pyc
│     │        │  │  ├─ _tqdm.cpython-313.pyc
│     │        │  │  ├─ _tqdm_gui.cpython-313.pyc
│     │        │  │  ├─ _tqdm_notebook.cpython-313.pyc
│     │        │  │  ├─ _tqdm_pandas.cpython-313.pyc
│     │        │  │  ├─ _utils.cpython-313.pyc
│     │        │  │  ├─ asyncio.cpython-313.pyc
│     │        │  │  ├─ auto.cpython-313.pyc
│     │        │  │  ├─ autonotebook.cpython-313.pyc
│     │        │  │  ├─ cli.cpython-313.pyc
│     │        │  │  ├─ dask.cpython-313.pyc
│     │        │  │  ├─ gui.cpython-313.pyc
│     │        │  │  ├─ keras.cpython-313.pyc
│     │        │  │  ├─ notebook.cpython-313.pyc
│     │        │  │  ├─ rich.cpython-313.pyc
│     │        │  │  ├─ std.cpython-313.pyc
│     │        │  │  ├─ tk.cpython-313.pyc
│     │        │  │  ├─ utils.cpython-313.pyc
│     │        │  │  └─ version.cpython-313.pyc
│     │        │  ├─ _dist_ver.py
│     │        │  ├─ _main.py
│     │        │  ├─ _monitor.py
│     │        │  ├─ _tqdm.py
│     │        │  ├─ _tqdm_gui.py
│     │        │  ├─ _tqdm_notebook.py
│     │        │  ├─ _tqdm_pandas.py
│     │        │  ├─ _utils.py
│     │        │  ├─ asyncio.py
│     │        │  ├─ auto.py
│     │        │  ├─ autonotebook.py
│     │        │  ├─ cli.py
│     │        │  ├─ completion.sh
│     │        │  ├─ contrib
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ bells.cpython-313.pyc
│     │        │  │  │  ├─ concurrent.cpython-313.pyc
│     │        │  │  │  ├─ discord.cpython-313.pyc
│     │        │  │  │  ├─ itertools.cpython-313.pyc
│     │        │  │  │  ├─ logging.cpython-313.pyc
│     │        │  │  │  ├─ slack.cpython-313.pyc
│     │        │  │  │  ├─ telegram.cpython-313.pyc
│     │        │  │  │  └─ utils_worker.cpython-313.pyc
│     │        │  │  ├─ bells.py
│     │        │  │  ├─ concurrent.py
│     │        │  │  ├─ discord.py
│     │        │  │  ├─ itertools.py
│     │        │  │  ├─ logging.py
│     │        │  │  ├─ slack.py
│     │        │  │  ├─ telegram.py
│     │        │  │  └─ utils_worker.py
│     │        │  ├─ dask.py
│     │        │  ├─ gui.py
│     │        │  ├─ keras.py
│     │        │  ├─ notebook.py
│     │        │  ├─ rich.py
│     │        │  ├─ std.py
│     │        │  ├─ tk.py
│     │        │  ├─ tqdm.1
│     │        │  ├─ utils.py
│     │        │  └─ version.py
│     │        ├─ tqdm-4.67.1.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ LICENCE
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ entry_points.txt
│     │        │  └─ top_level.txt
│     │        ├─ typing_extensions-4.15.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE
│     │        ├─ typing_extensions.py
│     │        ├─ typing_inspection
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ introspection.cpython-313.pyc
│     │        │  │  └─ typing_objects.cpython-313.pyc
│     │        │  ├─ introspection.py
│     │        │  ├─ py.typed
│     │        │  ├─ typing_objects.py
│     │        │  └─ typing_objects.pyi
│     │        ├─ typing_inspection-0.4.2.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE
│     │        ├─ uritemplate
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ api.cpython-313.pyc
│     │        │  │  ├─ orderedset.cpython-313.pyc
│     │        │  │  ├─ template.cpython-313.pyc
│     │        │  │  └─ variable.cpython-313.pyc
│     │        │  ├─ api.py
│     │        │  ├─ orderedset.py
│     │        │  ├─ py.typed
│     │        │  ├─ template.py
│     │        │  └─ variable.py
│     │        ├─ uritemplate-4.2.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  ├─ licenses
│     │        │  │  └─ LICENSE
│     │        │  └─ top_level.txt
│     │        ├─ urllib3
│     │        │  ├─ __init__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ _base_connection.cpython-313.pyc
│     │        │  │  ├─ _collections.cpython-313.pyc
│     │        │  │  ├─ _request_methods.cpython-313.pyc
│     │        │  │  ├─ _version.cpython-313.pyc
│     │        │  │  ├─ connection.cpython-313.pyc
│     │        │  │  ├─ connectionpool.cpython-313.pyc
│     │        │  │  ├─ exceptions.cpython-313.pyc
│     │        │  │  ├─ fields.cpython-313.pyc
│     │        │  │  ├─ filepost.cpython-313.pyc
│     │        │  │  ├─ poolmanager.cpython-313.pyc
│     │        │  │  └─ response.cpython-313.pyc
│     │        │  ├─ _base_connection.py
│     │        │  ├─ _collections.py
│     │        │  ├─ _request_methods.py
│     │        │  ├─ _version.py
│     │        │  ├─ connection.py
│     │        │  ├─ connectionpool.py
│     │        │  ├─ contrib
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ pyopenssl.cpython-313.pyc
│     │        │  │  │  └─ socks.cpython-313.pyc
│     │        │  │  ├─ emscripten
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ connection.cpython-313.pyc
│     │        │  │  │  │  ├─ fetch.cpython-313.pyc
│     │        │  │  │  │  ├─ request.cpython-313.pyc
│     │        │  │  │  │  └─ response.cpython-313.pyc
│     │        │  │  │  ├─ connection.py
│     │        │  │  │  ├─ emscripten_fetch_worker.js
│     │        │  │  │  ├─ fetch.py
│     │        │  │  │  ├─ request.py
│     │        │  │  │  └─ response.py
│     │        │  │  ├─ pyopenssl.py
│     │        │  │  └─ socks.py
│     │        │  ├─ exceptions.py
│     │        │  ├─ fields.py
│     │        │  ├─ filepost.py
│     │        │  ├─ http2
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ connection.cpython-313.pyc
│     │        │  │  │  └─ probe.cpython-313.pyc
│     │        │  │  ├─ connection.py
│     │        │  │  └─ probe.py
│     │        │  ├─ poolmanager.py
│     │        │  ├─ py.typed
│     │        │  ├─ response.py
│     │        │  └─ util
│     │        │     ├─ __init__.py
│     │        │     ├─ __pycache__
│     │        │     │  ├─ __init__.cpython-313.pyc
│     │        │     │  ├─ connection.cpython-313.pyc
│     │        │     │  ├─ proxy.cpython-313.pyc
│     │        │     │  ├─ request.cpython-313.pyc
│     │        │     │  ├─ response.cpython-313.pyc
│     │        │     │  ├─ retry.cpython-313.pyc
│     │        │     │  ├─ ssl_.cpython-313.pyc
│     │        │     │  ├─ ssl_match_hostname.cpython-313.pyc
│     │        │     │  ├─ ssltransport.cpython-313.pyc
│     │        │     │  ├─ timeout.cpython-313.pyc
│     │        │     │  ├─ url.cpython-313.pyc
│     │        │     │  ├─ util.cpython-313.pyc
│     │        │     │  └─ wait.cpython-313.pyc
│     │        │     ├─ connection.py
│     │        │     ├─ proxy.py
│     │        │     ├─ request.py
│     │        │     ├─ response.py
│     │        │     ├─ retry.py
│     │        │     ├─ ssl_.py
│     │        │     ├─ ssl_match_hostname.py
│     │        │     ├─ ssltransport.py
│     │        │     ├─ timeout.py
│     │        │     ├─ url.py
│     │        │     ├─ util.py
│     │        │     └─ wait.py
│     │        ├─ urllib3-2.5.0.dist-info
│     │        │  ├─ INSTALLER
│     │        │  ├─ METADATA
│     │        │  ├─ RECORD
│     │        │  ├─ WHEEL
│     │        │  └─ licenses
│     │        │     └─ LICENSE.txt
│     │        ├─ uvicorn
│     │        │  ├─ __init__.py
│     │        │  ├─ __main__.py
│     │        │  ├─ __pycache__
│     │        │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  ├─ __main__.cpython-313.pyc
│     │        │  │  ├─ _compat.cpython-313.pyc
│     │        │  │  ├─ _subprocess.cpython-313.pyc
│     │        │  │  ├─ _types.cpython-313.pyc
│     │        │  │  ├─ config.cpython-313.pyc
│     │        │  │  ├─ importer.cpython-313.pyc
│     │        │  │  ├─ logging.cpython-313.pyc
│     │        │  │  ├─ main.cpython-313.pyc
│     │        │  │  ├─ server.cpython-313.pyc
│     │        │  │  └─ workers.cpython-313.pyc
│     │        │  ├─ _compat.py
│     │        │  ├─ _subprocess.py
│     │        │  ├─ _types.py
│     │        │  ├─ config.py
│     │        │  ├─ importer.py
│     │        │  ├─ lifespan
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ off.cpython-313.pyc
│     │        │  │  │  └─ on.cpython-313.pyc
│     │        │  │  ├─ off.py
│     │        │  │  └─ on.py
│     │        │  ├─ logging.py
│     │        │  ├─ loops
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ asyncio.cpython-313.pyc
│     │        │  │  │  ├─ auto.cpython-313.pyc
│     │        │  │  │  └─ uvloop.cpython-313.pyc
│     │        │  │  ├─ asyncio.py
│     │        │  │  ├─ auto.py
│     │        │  │  └─ uvloop.py
│     │        │  ├─ main.py
│     │        │  ├─ middleware
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ asgi2.cpython-313.pyc
│     │        │  │  │  ├─ message_logger.cpython-313.pyc
│     │        │  │  │  ├─ proxy_headers.cpython-313.pyc
│     │        │  │  │  └─ wsgi.cpython-313.pyc
│     │        │  │  ├─ asgi2.py
│     │        │  │  ├─ message_logger.py
│     │        │  │  ├─ proxy_headers.py
│     │        │  │  └─ wsgi.py
│     │        │  ├─ protocols
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  └─ utils.cpython-313.pyc
│     │        │  │  ├─ http
│     │        │  │  │  ├─ __init__.py
│     │        │  │  │  ├─ __pycache__
│     │        │  │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  │  ├─ auto.cpython-313.pyc
│     │        │  │  │  │  ├─ flow_control.cpython-313.pyc
│     │        │  │  │  │  ├─ h11_impl.cpython-313.pyc
│     │        │  │  │  │  └─ httptools_impl.cpython-313.pyc
│     │        │  │  │  ├─ auto.py
│     │        │  │  │  ├─ flow_control.py
│     │        │  │  │  ├─ h11_impl.py
│     │        │  │  │  └─ httptools_impl.py
│     │        │  │  ├─ utils.py
│     │        │  │  └─ websockets
│     │        │  │     ├─ __init__.py
│     │        │  │     ├─ __pycache__
│     │        │  │     │  ├─ __init__.cpython-313.pyc
│     │        │  │     │  ├─ auto.cpython-313.pyc
│     │        │  │     │  ├─ websockets_impl.cpython-313.pyc
│     │        │  │     │  ├─ websockets_sansio_impl.cpython-313.pyc
│     │        │  │     │  └─ wsproto_impl.cpython-313.pyc
│     │        │  │     ├─ auto.py
│     │        │  │     ├─ websockets_impl.py
│     │        │  │     ├─ websockets_sansio_impl.py
│     │        │  │     └─ wsproto_impl.py
│     │        │  ├─ py.typed
│     │        │  ├─ server.py
│     │        │  ├─ supervisors
│     │        │  │  ├─ __init__.py
│     │        │  │  ├─ __pycache__
│     │        │  │  │  ├─ __init__.cpython-313.pyc
│     │        │  │  │  ├─ basereload.cpython-313.pyc
│     │        │  │  │  ├─ multiprocess.cpython-313.pyc
│     │        │  │  │  ├─ statreload.cpython-313.pyc
│     │        │  │  │  └─ watchfilesreload.cpython-313.pyc
│     │        │  │  ├─ basereload.py
│     │        │  │  ├─ multiprocess.py
│     │        │  │  ├─ statreload.py
│     │        │  │  └─ watchfilesreload.py
│     │        │  └─ workers.py
│     │        └─ uvicorn-0.37.0.dist-info
│     │           ├─ INSTALLER
│     │           ├─ METADATA
│     │           ├─ RECORD
│     │           ├─ REQUESTED
│     │           ├─ WHEEL
│     │           ├─ entry_points.txt
│     │           └─ licenses
│     │              └─ LICENSE.md
│     └─ pyvenv.cfg
└─ vite.config.ts

```