# apiko-tpls
List of template apps and installation scripts for use with the Apiko CLI.

## Creating a template installer

When the Apiko CLI is run, it synchronizes the template installers to a local machine from this repository. If you want to create a template installer for your template app:

1. Fork this repository and clone your fork.
2. Have a look at some installers in the `templates` folder and choose one to modify for your own template.
3. Create a copy of that file and name it according to your template app, ideally in the form of `frontendFramework-features.js`, e.g. `angular2-todo.js`.
4. Find the `templates` folder in your apiko-cli globally installed package and copy your template installer file there.
5. Edit your installer's `title` and `description` properties.
6. Run `apiko tempalates` to see if your installer shows in the list.
7. Edit the `create` and `setup` functions of your installer to do the job, have a look at other installers for reference.
8. Test everything.
9. Copy your installer file back to the `templates` folder of your clone of this repository (apiko-tpls).
10. `commit`, `push` and pull request.

When your PR is accepted, your template installer will instantly become available to everyone. No need to update the CLI.

**Important:** Later if you want to enhance your template installer after it's live, Apiko CLI will always check your installer file's checksum and will overwrite your changes with the online version. To keep your local code changes and test them, you will need to run the Apiko CLI with `--no-update`, e.g. `apiko templates --no-update`.

**Important:** Please do not use any features of ECMAScript that Node started supporting in very recent versions, like `async`/`await`, the code is not being transpiled as of now.
