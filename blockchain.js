function blockchain() 
{
	var email_entry = document.getElementById("email_from_terms_and_conditions_of_connection").value;	
	if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email_entry) !== false)
	{
		var entry = email_entry;
		var redirect = "email="
	}
	else
	{
		document.getElementById("email_from_terms_and_conditions_of_connection").style.border= "1px solid rgb(255,0,0)";
		document.getElementById("email_from_terms_and_conditions_of_connection").style.color= "rgb(255,0,0)";
		document.getElementById("error").style.display= "block";
	}
	
	if(typeof entry !== "undefined")
	{
		const net = "1234567890ABCDEFGHIJKLMNOPRSTUWXYVQZabcdefghijklmnoprstuwxyvqz@.=_-+*/!#%|";					
		const net_split = net.split("");					
		
		const entry_split = entry.split("");
		
		const net_split_shuffled = net_split
			.map(value => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value)
		const net_join = net_split_shuffled.join("");
		
		function get_block(entry_Array) 
		{
			const net_array = entry_Array[0]
			const entry_array = entry_Array[1]
			const block_array = [];
			entry_array.forEach((entry_element ,entry_entry_no) => 
			{
				net_array.forEach((net_element,net_entry_no) => 
				{
					if (entry_element === net_element) 
					{
						const block_no = net_entry_no;
						block_array.push(block_no);
					}
				})
			})
			return block_array;
		}
		const block = get_block([net_split_shuffled, entry_split]);
		const block_join = block.join("");
		
		
		function bit_leght() 
		{
			const block_array = block
			const bit_Array = [];
			block_array.forEach((block_element) => 
			{
				const string_block_element = block_element.toString();
				const length_string_block_element = string_block_element.length;
				bit_Array.push(length_string_block_element);	
				
			})
			return bit_Array;
		}
		const bits = bit_leght();
		const bits_join = bits.join("");
		
		
		function get_bit_block() 
		{
			const bit_array = bits
			const bit_block_array = [];
			bit_array.forEach((bits_element) => 
			{
				if(bits_element===2)
				{
					const par = "24680";
					const PAR = par.split("");
					const PAR_shuffled = PAR
					.map(value => ({ value, sort: Math.random() }))
					.sort((a, b) => a.sort - b.sort)
					.map(({ value }) => value);
					const par_no = PAR_shuffled[bits_element];
					const replace_par_no = par_no.replace(bits_element, par_no);
					bit_block_array.push(replace_par_no);
				}
				else
				{
					const npar = "13579";
					const NPAR = npar.split("");
					const NPAR_shuffled = NPAR
					.map(value => ({ value, sort: Math.random() }))
					.sort((a, b) => a.sort - b.sort)
					.map(({ value }) => value);
					const npar_no = NPAR_shuffled[bits_element];
					const replace_npar_no = npar_no.replace(bits_element, npar_no);
					bit_block_array.push(replace_npar_no);
				}
				
			})
			return bit_block_array;
		}
		const bit_block = get_bit_block();
		const bit_block_join = bit_block.join("");
		
		const btoa_net_join = btoa(net_join);
		
		const blockchain = block_join + "." + bit_block_join;
		
		const btoa_blockchain = btoa(blockchain);
		
		const request_uri = btoa_net_join + btoa_blockchain;
		
		const btoa_request_uri = btoa(request_uri);
		
		const replace_btoa_request_uri = btoa_request_uri.replace("=","");
		
		const path = location.pathname;
		
		window.location = path + "?" + redirect + replace_btoa_request_uri;
		
//		console.log(net_join)
//		console.log(entry)
//		console.log(block_join)
//		console.log(bits_join)
//		console.log(bit_block_join)
//		console.log(blockchain)
//		console.log(request_uri)
//		console.log(replace_btoa_request_uri)
	}
	
}