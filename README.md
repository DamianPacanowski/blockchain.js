download the blockchain.js file and place it on the server

download link https://github.com/DamianPacanowski/blockchain.js/blob/ab6fa2980817ebc6de4b15c1765d4ec4a289c710/blockchain.js

add the code below where you want it to work

remember to overwrite the correct path to the blockchain.js file, it is set to the main folder by default

 	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>blockchain.js sample form</title>
	<input id="net" type="text" name="net" placeholder="1234567890ABCDEFGHIJKLMNOPRSTUWXYVQZabcdefghijklmnoprstuwxyvqz@.=_-+*/!#%|" style="display:block;width:50%;margin:3px;">
	<input id="text" type="text" name="text" placeholder="31 long string" style="display:block;width:50%;margin:3px;">
	<select id="typex" name="typex"><option value="">select type</opiton><option value="0">all in get</option><option value="1">chain in cookie rest in get</option></select>
	<button onclick="blockchain();" style="cursor:pointer;">BLOCKCHAIN JS</button>
	<script src="blockchain.js"></script>
 
