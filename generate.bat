clear
@cls
@echo DESCRIPTION OF HOW TO INSTALL PAGEFIND-BUNDLE 
@echo -in the root public instead of the public-folder inside .playground-subfolder.
@echo ---
@echo 1. Remove ".playground" from the "generate"-script in package.json
@echo 2. Run: yarn generate
@echo 3. Run: yarn pagefind
@echo ---
@echo Check if the pagefind-bundle now is in your "public"-folder.
@echo (This bundle have to be there before pushing the repo to GitHub.)
@echo ---
@echo Remember to add ".playground" to the "generate"-script in package.json
@echo (Now you can create the bundle in "public"-folder in ."playground"-folder and test the search-functionality in development.)
@pause