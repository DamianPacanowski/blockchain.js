download the blockchain.js file and place it on the server
https://github.com/DamianPacanowski/blockchain.js/blob/ab6fa2980817ebc6de4b15c1765d4ec4a289c710/blockchain.js
remember to overwrite the correct path to the blockchain.js file, it is set to the main folder by default
add the code below

 	<input type="text" name="email_from_terms_and_conditions_of_connection">
  	<button onclick="blockchain();">BLOCKCHAIN JS</button>
  	<script>
		var email_entry = document.getElementById("email_from_terms_and_conditions_of_connection").value;	
		if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email_entry) !== false)
		{
			var entry = email_entry;
			var redirect = "email="
		}
		else
		{
			console.log(net_join)
			console.log(entry)
			console.log(block_join)
			console.log(bits_join)
			console.log(bit_block_join)
			console.log(blockchain)
			console.log(request_uri)
			console.log(replace_btoa_request_uri)
		}
  	</script>
  	<script src="/blockchain.js"></script>
