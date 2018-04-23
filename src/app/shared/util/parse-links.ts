import { Injectable } from '@angular/core';

@Injectable()
export class ParseLinks {
	
	

	constructor() {}
	
	parse(header: any): any {
	
		if (header.length === 0) {
                throw new Error('input must not be of zero length');
        }
        
        // Split parts by comma
        const parts = header.split(',');

		//.log("header : " + header);
		//console.log(parts);
		
		 let links = {};
		// Parse each part into a named link	
		for (let p of parts){
			
			let section = p.split(';');
			if (section.length !== 2) {
                    throw new Error('section could not be split on ";"');
            }
            
            let url = section[0].replace(/<(.*)>/, '$1').trim();
			
			//console.log(section);
			//console.log(url);
			
			let queryString = {page:0, 
							   size:0
							  };
			
			url.replace(
                    new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
                    function($0, $1, $2, $3) { queryString[$1] = $3; }
                );
                   
                
             const name = section[1].replace(/rel="(.*)"/, '$1').trim();
             
             links[name] = queryString.page;
                
		}
		
		return links;

	}
}