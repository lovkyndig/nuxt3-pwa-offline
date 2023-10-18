clear
@cls
@echo IF YOU WANT TO USE THIS HOLE PACKAGE AND NOT AS AN TEMPLATE? 
@echo ---
@echo Then you have to remove the ".playground"-folder from all the scripts in package.json
@echo ---
@echo Like this;
@echo Old: "dev": "nuxi dev .playground",
@echo New: "dev": "nuxi dev",
@echo ---
@echo NB! One more thing.
@echo You have to remove "constants.ts"-file from .playground, or remove the .playgrond-folder.
@echo Now you can use this package as normal and not as an template.
@pause