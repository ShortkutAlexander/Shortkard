
	
				function encodeImg(){
					const image = document.getElementById('profile-pic');
					
					return new Promise((resolve, reject) => {
					const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace('data:', '').replace(/^.+,/, '');

    const toDataURL = () => {
        const canvas = document.createElement('canvas');

        // We use naturalWidth and naturalHeight to get the real image size vs the size at which the image is shown on the page
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        // We get the 2d drawing context and draw the image in the top left
        canvas.getContext('2d').drawImage(image, 0, 0);

        // Convert canvas to DataURL and log to console
        const dataURL = canvas.toDataURL('image/jpeg', 0.5);
        //console.log(dataURL);
        // logs data:image/png;base64,wL2dvYWwgbW9yZ...

        // Convert to Base64 string
        const base64 = getBase64StringFromDataURL(dataURL);
        //console.log(base64);
			resolve(base64);
        // Logs wL2dvYWwgbW9yZ...
    };
   
    // If the image has already loaded, let's go!
    if (image.complete) {
                toDataURL();
            } else {
                image.onload = toDataURL;
                image.onerror = () => reject('Image load error');
            }
        });
    }
	


        async function generateVCard() {
            var updateCard ; 
            var mainDataVCard = `BEGIN:VCARD
VERSION:3.0
END:VCARD`;
                    

                    if(document.getElementById("firstName") && document.getElementById("lastName") ){
                        const firstName = document.getElementById("firstName").innerText + " ";
                        const lastName = document.getElementById("lastName").innerText + " ";

                        updateCard = mainDataVCard.replace('END:VCARD', `N:${firstName} ${lastName}\nEND:VCARD`);
                        updateCard = updateCard.replace('END:VCARD', `FN:${firstName} ${lastName}\nEND:VCARD`);
                    }

                    if(document.getElementById("title")){
                        const title = document.getElementById("title").innerText;
                        updateCard = updateCard.replace('END:VCARD', `TITLE:${title}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("adresse")){
                        const adresse = document.getElementById("adresse").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `ADR;CHARSET=UTF-8:;;${adresse};;;\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("phone")){
                        const phone = document.getElementById("phone").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `TEL;CELL;TYPE=mobile,VOICE:${phone}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("courriel")){
                        const courriel = document.getElementById("courriel").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `EMAIL;TYPE=Email:${courriel}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("googleReview")){
                        const googleReview = document.getElementById("googleReview").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `URL;TYPE=Laisser un avis:${googleReview}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("website")){
                        const website = document.getElementById("website").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `URL:${website}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("linkedinLink")){
                        const linkedinLink = document.getElementById("linkedinLink").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `URL;TYPE=Linkedin:${linkedinLink}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("facebookLink")){
                        const facebookLink = document.getElementById("facebookLink").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `URL;TYPE=Facebook:${facebookLink}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("instaLink")){
                        const instaLink = document.getElementById("instaLink").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `URL;TYPE=Instagram:${instaLink}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("twitterLink")){
                        const twitterLink = document.getElementById("twitterLink").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `LABEL:Twitter;URL;TYPE=Twitter:${twitterLink}\nEND:VCARD`);
                        console.log(updateCard);
                    }

                    if(document.getElementById("company")){
                        const company = document.getElementById("company").innerText;
                        var updateCard  = updateCard.replace('END:VCARD', `ORG:${company}\nEND:VCARD`);
                        
                    };

                    console.log(updateCard);
					

					/*try{
						const adresse = document.getElementById("adresse").innerText;
						const courriel = document.getElementById("adresse").innerText;
					const website = document.getElementById("website").innerText;
					const linkedinLink = document.getElementById("linkedinLink").innerText;
					const facebookLink = document.getElementById("facebookLink").innerText;
					const instaLink = document.getElementById("instaLink").innerText;
					const twitterLink = document.getElementById("twitterLink").innerText;
					const company = document.getElementById("company").innerText;
					
						if(document.getElementById("title").innerText){
							const title = document.getElementById("title").innerText;
						}else{
							const title = "";
						}
					}catch(err) {
						console.log("Error : " + err);
					}finally{
						const firstName = document.getElementById("firstName").innerText + " ";
						const lastName = document.getElementById("lastName").innerText;
						console.log(firstName + lastName);
					const fullname = firstName.concat(lastName) ;
						console.log(fullname);
					const phone = document.getElementById("phone").innerText;
					}*/
					
					
					 try {
					const profilePic = await encodeImg(); // Wait for the Base64 string

					//console.log(profilePic);
            // Define the vCard data
            
            /*const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${firstName} ${lastName}
FN:${firstName} ${lastName}
TITLE:${title}
ORG:${company}
COMPANY:${company}
TEL;CELL;TYPE=mobile,VOICE:${phone}
EMAIL;TYPE=Email:${courriel}
URL:${website}
ADR;CHARSET=UTF-8:;;${adresse};;;
URL;TYPE=Linkedin:${linkedinLink}
URL;TYPE=Facebook:${facebookLink}
URL;TYPE=Instagram:${instaLink}
URL;TYPE=Twitter:${twitterLink}
PHOTO;ENCODING=b;TYPE=JPEG:${profilePic}
END:VCARD`;*/

const vCardData = updateCard.replace('END:VCARD', `PHOTO;ENCODING=b;TYPE=JPEG:${profilePic}\nEND:VCARD`);

            // Encode the vCard data to base64
            const base64VCard = btoa(vCardData);

            // Create a data URI for the vCard
            const dataUri = `data:text/vcard;base64,${base64VCard}`;

            // Create a link element
            const link = document.createElement('a');
            link.href = dataUri;

            // Set the download attribute to the desired file name
            link.download = 'contact.vcf';

            // Append the link to the body (required for Firefox)
            document.body.appendChild(link);

            // Programmatically click the link to trigger the download
            link.click();

            // Remove the link after download
            document.body.removeChild(link);
						 } catch (error) {
            console.error("Error generating vCard:", error);
        }
        }
    