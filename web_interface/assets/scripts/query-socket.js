//*****************************************************************************************
//Starter Web Interface v6.0
//Copyright (c) 2022 Pharos Architectural Controls Limited. All rights reserved.
//This sample content is made freely available for illustrative purposes only. Pharos Architectural Controls grants a non-exclusive copyright licence to use this sample content from which you can
//generate content tailored to your own specific needs for use with products from Pharos Architectural Controls. This sample content has not been thoroughly tested under all conditions and Pharos
//Architectural Controls cannot guarantee reliability or serviceability.
//This sample content is provided "as is" without warranties of any kind. The implied warranties of non-infringement, merchantability and fitness for a particular purpose are expressly
//disclaimed. In no event shall Pharos Architectural Controls be liable to any party for direct, indirect, incidental or consequential damages arising from the use of this sample content.
//For further information please contact support@pharoscontrols.com.
//*****************************************************************************************

Query.set_redirect_handler(() => {
    return "/login.html";
})

Query.set_success_handler(() => {
    console.log("Success");
})

Query.set_error_handler(() => {
     console.log("Error");
})

Query.connect()
Query.run_command('');
