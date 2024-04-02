function blockchain() 
{	
	if(document.getElementById("net"))
	{
		var net = document.getElementById("net").value;
		if(net=="")
		{
			var net = "1234567890ABCDEFGHIJKLMNOPRSTUWXYVQZabcdefghijklmnoprstuwxyvqz@.=_-+*/!#%|";
		}
		else
		{
			var net_value = document.getElementById("net").value;
		}
	}
	else
	{
		var net = "1234567890ABCDEFGHIJKLMNOPRSTUWXYVQZabcdefghijklmnoprstuwxyvqz@.=_-+*/!#%|";
	}
	if(document.getElementById("text"))
	{
		var text = document.getElementById("text").value;
		if(text=="")
		{
			var text = "blockchain.js";
		}
	}
	else
	{
		var text = "blockchain.js";
	}
	if(document.getElementById("typex"))
	{
		var typex = document.getElementById("typex").value;
		if(typex=="")
		{
			var typex = 0;
		}
	}
	else
	{
		var typex = 0;
	}		
	var entry = text;
	var redirect = "?"
	if(typeof entry !== "undefined")
	{							
		var entry_split = entry.split("");				
		
		if(net)
		{
			var net_split = net.split("");			
			var net_split_shuffled = net_split		
				.map(value => ({ value, sort: Math.random() }))
				.sort((a, b) => a.sort - b.sort)
				.map(({ value }) => value)
			var net_join = net_split_shuffled.join("");
		}
		if(net_value)
		{
			var net_split = net_value.split("");
			var net_split_shuffled = net_value.split("");
			var net_join = net_value;
		}
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
		if(typex==0)
		{
			var btoa_net_join = btoa(net_join);
		}
		if(typex==1)
		{
			var btoa_net_join = "";
			document.cookie = "btoa_net_join" + "=" + btoa(net_join) + ";" + 0 + ";path=/";
		}
		const blockchain = block_join + "." + bit_block_join;		
		const btoa_blockchain = btoa(blockchain);		
		const request_uri = btoa_net_join + btoa_blockchain;		
		const btoa_request_uri = btoa(request_uri);		
		const replace_btoa_request_uri = btoa_request_uri.replace("=","");		
		const path = location.pathname;		
		window.location = path + redirect + replace_btoa_request_uri;
	}
}
//&copy Created by Damian Pacanowski
