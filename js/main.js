$( function() {
    //$("#address_min,#comments_min").css('display','none');
   $( "#datepicker" ).datepicker({
      //dateFormat: "dd-mm-yy 00:00:00",
      dateFormat: "dd-mm-yy",
      buttonImage: '../assets/images/celender-icon.png',
      buttonImageOnly: true,
     // minDate: 0
    }).on('change', function() {
      //$(this).valid();  // triggers the validation test
      $(".datevalidate").css('display','none');
      var dateSelected = $("#datepicker").val();
      $("#callDate_hidden").val(dateSelected+' 00:00:00');
    });
  
    /*$('#datepicker').datetimepicker({
  
      format: 'Y-m-d h:i:00', //'yy-m-d h:i:s',  //YYYY-MM-DD hh:mm:ss  
      //dateFormat: "dd-mm-yy",
      buttonImage: '../assets/images/celender-icon.png',
      buttonImageOnly: true,
  
      }).on('change', function() {
  
      $(".datevalidate").css('display','none');
  
    });*/
  
  
    $(".exeLoc").css('display','none');
    $('#lead_source').on('change', function() {
        $('.exeLoc').val('');
        if(this.value == 'Field Lead') {
            $(".exeLoc").css('display','block');
        } else {
            $(".exeLoc").css('display','none');
        }
    });
  
    $(".sqfterr").css('display','none');
    $('#00N0T000008clZL').on('change', function() {
        if(this.value == '' || this.value == null) {
            $(".sqfterr").css('display','block');
        } else {
            $(".sqfterr").css('display','none');
        }
    });
  
    $("#company").on('input', function () {
      var value = $(this).val().replace(/'/g, '').replace(/"/g, '');
      $("#company").val(value);
    });
  
    $("#companyAddress").on('input', function () {
      var value = $(this).val().replace(/'/g, '').replace(/"/g, '');
      $("#companyAddress").val(value);
      $("#address_min, .companyaddress_empty").css('display','none');
      if(value.length < 5) {
          $("#address_min").css('display','block');
      }
    });
  
    $("#00N0T000008clYm").on('input', function () {
      var value = $(this).val().replace(/'/g, '').replace(/"/g, '');
      $("#00N0T000008clYm").val(value);
    });
  
    $("#comments").on('input', function () {
      var value = $(this).val().replace(/'/g, '').replace(/"/g, '');
      $("#comments").val(value);
      $("#comments_min, .comments_empty").css('display','none');
      if(value.length < 5) {
          $("#comments_min").css('display','block');
      }
    });
  
    $('#00N0T000008clYX').on('input', function(e){
      $(".companyPincode").css('display','none');
      if($("#00N0T000008clYX").val().length != 6){
        $(".companyPincode").css('display','block');
      } 
    });  
  
    $('#00N0o00000GjgNp').on('input', function(e){
      $(".sitepincode").css('display','none');
      if($("#00N0o00000GjgNp").val().length != 6){
        $(".sitepincode").css('display','block');
      } 
    });
  
    $('#00N0o00000GjgNd').on('input', function(e){
      $(".mobvalid").css('display','none');
      if($("#00N0o00000GjgNd").val().length != 10){
        $(".mobvalid").css('display','block');
      } 
    });
  
    $('#00N0T000009rQe1').on('input', function(e){
      $(".novalid1").css('display','none');
      if($("#00N0T000009rQe1").val().length < 1){
        $(".novalid1").css('display','block');
      } 
    });
  
    $('#00N0T000009rQe6').on('input', function(e){
      $(".novalid2").css('display','none');
      if($("#00N0T000009rQe6").val().length < 1){
        $(".novalid2").css('display','block');
      } 
    });
  
    $('#00N0T000009rQeB').on('input', function(e){
      $(".novalid3").css('display','none');
      if($("#00N0T000009rQeB").val().length < 1){
        $(".novalid3").css('display','block');
      } 
    });
  
    $('#00N0T000009rQeG').on('input', function(e){
      $(".novalid4").css('display','none');
      if($("#00N0T000009rQeG").val().length < 1){
        $(".novalid4").css('display','block');
      } 
    });
  
    
  
    $(".form-control").bind("cut copy paste",function(e) {
      e.preventDefault();
    });
  
    //10,29,35,54,55,86,887,88,89,00
  
  
    /*$(".onlyNumbers").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#errmsg").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    }); */
  
    $(".onlyNumbers").on("input", function () {
      var currentValue = removeSpecialChars($(this).val());
      $(this).val(currentValue);
    });
  
    $('#00N0T000008clYc').on("input", function () {
        var currentValue = onlyAlphaNSpace($(this).val());
        $(this).val(currentValue);
    });
  
    document.getElementById('state').addEventListener('change', function() {
        //alert(22);
        console.log('You selected: ', this.value);
        document.getElementById("cityName").value = '';
        $("#cityName option").remove();
        $('#cityName').append('<option value="">City</option>');
  
        var state_class = $('select[name="state"] :selected').attr('class');
        //alert(state_class);
  
        switch(state_class) {
          case 'state_andhra_pradesh':
            // code block
            //alert('state_andhra_pradesh');
            $('#cityName').append('<option value="Adoni" >Adoni</option><option value="Amaravati" >Amaravati</option><option value="Anantapur" >Anantapur</option><option value="Anantapuram" >Anantapuram</option><option value="Bhimavaram" >Bhimavaram</option><option value="Chittoor" >Chittoor</option><option value="Dharmavaram" >Dharmavaram</option><option value="Eluru" >Eluru</option><option value="Gudivada" >Gudivada</option><option value="Guntakal" >Guntakal</option><option value="Guntur" >Guntur</option><option value="Hindupur" >Hindupur</option><option value="Kadapa" >Kadapa</option><option value="Kakinada" >Kakinada</option><option value="Kavali" >Kavali</option><option value="Kurnool" >Kurnool</option><option value="Machilipatnam" >Machilipatnam</option><option value="Madanapalle" >Madanapalle</option><option value="Nandyal" >Nandyal</option><option value="Narasaraopet" >Narasaraopet</option><option value="Nellore" >Nellore</option><option value="Ongole" >Ongole</option><option value="Proddatur" >Proddatur</option><option value="Rajahmundry" >Rajahmundry</option><option value="Srikakulam" >Srikakulam</option><option value="Tadepalligudem" >Tadepalligudem</option><option value="Tadipatri" >Tadipatri</option><option value="Tenali" >Tenali</option><option value="Vijayanagaram" >Vijayanagaram</option><option value="Vijayawada" >Vijayawada</option><option value="Visakhapatnam" >Visakhapatnam</option>');
  
            break;
          case 'state_arunachal_pradesh':
            //alert('state_arunachal_pradesh');
            $('#cityName').append('<option value="Aalo" >Aalo (Along)</option><option value="Anini" >Anini</option><option value="Basar" >Basar</option><option value="Boleng" >Boleng</option><option value="Bomdila" >Bomdila</option><option value="Changlang" >Changlang</option><option value="Daporijo" >Daporijo</option><option value="Deomali" >Deomali</option><option value="Dirang" >Dirang</option><option value="Hawai" >Hawai</option><option value="Itanagar" >Itanagar</option><option value="Jairampur" >Jairampur</option><option value="Khonsa" >Khonsa</option><option value="Koloriang" >Koloriang</option><option value="Longding" >Longding</option><option value="Longding" >Miao</option><option value="Naharlagun" >Naharlagun</option><option value="Namsai" >Namsai</option><option value="Pasighat" >Pasighat</option><option value="Roing" >Roing</option><option value="Rupa" >Rupa</option><option value="Sagalee" >Sagalee</option><option value="Seppa" >Seppa</option><option value="Tawang" >Tawang</option><option value="Tezu" >Tezu</option><option value="Yingkiong" >Yingkiong</option><option value="Ziro" >Ziro</option>');
            // code block
            break;
          
          case 'state_tripura':
              // code block
              $('#cityName').append('<option value="Agartala">Agartala</option>');
              break;
          case 'state_uttar_pradesh':
                // code block
              $('#cityName').append('<option value="Agra">Agra</option><option value="Aligarh">Aligarh</option><option value="Allahabad">Allahabad</option><option value="Amroha">Amroha</option><option value="Bahraich">Bahraich</option><option value="Ballia">Ballia</option><option value="Bareilly">Bareilly</option><option value="Budaun">Budaun</option><option value="Bulandshahr">Bulandshahr</option><option value="Etawah">Etawah</option><option value="Farrukhabad">Farrukhabad</option><option value="Fatehpur">Fatehpur</option><option value="Firozabad">Firozabad</option><option value="Ghaziabad">Ghaziabad</option><option value="Gorakhpur">Gorakhpur</option><option value="Hapur">Hapur</option><option value="Jaunpur">Jaunpur</option><option value="Jhansi">Jhansi</option><option value="Kanpur">Kanpur</option><option value="Khora, Ghaziabad">Khora, Ghaziabad</option><option value="Loni">Loni</option><option value="Lucknow">Lucknow</option><option value="Mathura">Mathura</option><option value="Mau">Mau</option><option value="Meerut">Meerut</option><option value="Mirzapur">Mirzapur</option><option value="Moradabad">Moradabad</option><option value="Muzaffarnagar">Muzaffarnagar</option><option value="Noida">Noida</option><option value="Orai">Orai</option><option value="Raebareli">Raebareli</option><option value="Rampur">Rampur</option><option value="Saharanpur">Saharanpur</option><option value="Sambhal">Sambhal</option><option value="Shahjahanpur">Shahjahanpur</option><option value="Unnao">Unnao</option><option value="Varanasi">Varanasi</option>');
              break;
          case 'state_gujarat':
                // code block
              $('#cityName').append('<option value="Ahmedabad">Ahmedabad</option><option value="Anand">Anand</option><option value="Bhavnagar">Bhavnagar</option><option value="Gandhidham">Gandhidham</option><option value="Gandhinagar">Gandhinagar</option><option value="Jamnagar">Jamnagar</option><option value="Junagadh">Junagadh</option><option value="Mehsana">Mehsana</option><option value="Morbi">Morbi</option><option value="Nadiad">Nadiad</option><option value="Rajkot">Rajkot</option><option value="Surat">Surat</option><option value="Surendranagar Dudhrej">Surendranagar Dudhrej</option><option value="Vadodara">Vadodara</option>');
              break;
          case 'state_maharashtra':
                // code block
              $('#cityName').append('<option value="Ahmednagar">Ahmednagar</option><option value="Akola">Akola</option><option value="Ambarnath">Ambarnath</option><option value="Amravati">Amravati</option><option value="Aurangabad">Aurangabad</option><option value="Bhiwandi">Bhiwandi</option><option value="Bhusawal">Bhusawal</option><option value="Chandrapur">Chandrapur</option><option value="Dhule">Dhule</option><option value="Ichalkaranji">Ichalkaranji</option><option value="Jalgaon">Jalgaon</option><option value="Jalna">Jalna</option><option value="Kalyan-Dombivli">Kalyan-Dombivli</option><option value="Kolhapur">Kolhapur</option><option value="Latur">Latur</option><option value="Malegaon">Malegaon</option><option value="Mira-Bhayandar">Mira-Bhayandar</option><option value="Mumbai">Mumbai</option><option value="Nagpur">Nagpur</option><option value="Nanded">Nanded</option><option value="Nashik">Nashik</option><option value="Navi Mumbai">Navi Mumbai</option><option value="Panvel">Panvel</option><option value="Parbhani">Parbhani</option><option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option><option value="Pune">Pune</option><option value="Sangli-Miraj & Kupwad">Sangli-Miraj & Kupwad</option><option value="Satara">Satara</option><option value="Solapur">Solapur</option><option value="Thane">Thane</option><option value="Ulhasnagar">Ulhasnagar</option><option value="Vasai-Virar">Vasai-Virar</option>');
              break;
          case 'state_mizoram':
                // code block
              $('#cityName').append('<option value="Aizawl">Aizawl</option>');
              break;
          case 'state_rajasthan':
                // code block
              $('#cityName').append('<option value="Ajmer">Ajmer</option><option value="Alwar">Alwar</option><option value="Bharatpur">Bharatpur</option><option value="Bhilwara">Bhilwara</option><option value="Bikaner">Bikaner</option><option value="Jaipur">Jaipur</option><option value="Jodhpur">Jodhpur</option><option value="Kota">Kota</option><option value="Pali">Pali</option><option value="Sikar">Sikar</option><option value="Sri Ganganagar">Sri Ganganagar</option><option value="Udaipur">Udaipur</option>');
              break;
          case 'state_kerala':
                // code block
              $('#cityName').append('<option value="Alappuzha">Alappuzha</option><option value="Kochi">Kochi</option><option value="Kollam">Kollam</option><option value="Kottayam">Kottayam</option><option value="Kozhikode">Kozhikode</option><option value="Thiruvananthapuram">Thiruvananthapuram</option><option value="Thrissur">Thrissur</option>');
              break;
          case 'state_haryana':
                // code block
              $('#cityName').append('<option value="Ambala">Ambala</option><option value="Bhiwani">Bhiwani</option><option value="Faridabad">Faridabad</option><option value="Gurgaon">Gurgaon</option><option value="Karnal">Karnal</option><option value="Panchkula">Panchkula</option><option value="Panipat">Panipat</option><option value="Rohtak">Rohtak</option><option value="Sirsa">Sirsa</option><option value="Sonipat">Sonipat</option><option value="Yamunanagar">Yamunanagar</option>');
              break;
          case 'state_tamil_nadu':
                // code block
              $('#cityName').append('<option value="Ambattur">Ambattur</option><option value="Avadi">Avadi</option><option value="Chennai">Chennai</option><option value="Coimbatore">Coimbatore</option><option value="Dindigul">Dindigul</option><option value="Erode">Erode</option><option value="Hosur">Hosur</option><option value="Karaikudi">Karaikudi</option><option value="Karur">Karur</option><option value="Kumbakonam">Kumbakonam</option><option value="Madurai">Madurai</option><option value="Nagercoil">Nagercoil</option><option value="Pallavaram">Pallavaram</option><option value="Pudukkottai">Pudukkottai</option><option value="Salem">Salem</option><option value="Thanjavur">Thanjavur</option><option value="Thoothukudi">Thoothukudi</option><option value="Tiruchirappalli">Tiruchirappalli</option><option value="Tirunelveli">Tirunelveli</option><option value="Tiruppur">Tiruppur</option><option value="Tiruvottiyur">Tiruvottiyur</option><option value="Vellore">Vellore</option>');
  
          case 'state_punjab':
                // code block
              $('#cityName').append('<option value="Amritsar">Amritsar</option><option value="Bathinda">Bathinda</option><option value="Jalandhar">Jalandhar</option><option value="Ludhiana">Ludhiana</option><option value="Patiala">Patiala</option><option value="Phagwara">Phagwara</option>');
  
          case 'state_jammu_and_kashmir':
                // code block
              $('#cityName').append('<option value="Anantnag">Anantnag</option><option value="Jammu">Jammu</option><option value="Srinagar">Srinagar</option>');
  
          case 'state_bihar':
                // code block
              $('#cityName').append('<option value="Patna">Patna</option><option value="Gaya">Gaya</option><option value="Bhagalpur">Bhagalpur</option><option value="Muzaffarpur">Muzaffarpur</option><option value="Bihar Sharif">Bihar Sharif</option><option value="Darbhanga">Darbhanga</option><option value="Purnia">Purnia</option><option value="Arrah">Arrah</option><option value="Begusarai">Begusarai</option><option value="Munger">Munger</option><option value="Chhapra">Chhapra</option><option value="Danapur">Danapur</option><option value="Katihar">Katihar</option><option value="Saharsa">Saharsa</option><option value="Hajipur">Hajipur</option><option value="Sasaram">Sasaram</option><option value="Dehri">Dehri</option><option value="Siwan">Siwan</option><option value="Bettiah">Bettiah</option><option value="Motihari">Motihari</option><option value="Kishanganj">Kishanganj</option><option value="Jamalpur">Jamalpur</option><option value="Buxar">Buxar</option><option value="Jehanabad">Jehanabad</option><option value="Aurangabad">Aurangabad</option>');
  
          case 'state_west_bengal':
                // code block
              $('#cityName').append('<option value="Asansol">Asansol</option><option value="Bally">Bally</option><option value="Baranagar">Baranagar</option><option value="Barasat">Barasat</option><option value="Bardhaman">Bardhaman</option><option value="Berhampore">Berhampore</option><option value="Bhatpara">Bhatpara</option><option value="Bidhannagar">Bidhannagar</option><option value="Chinsurah">Chinsurah</option><option value="Durgapur">Durgapur</option><option value="Gopalpur">Gopalpur</option><option value="Haldia">Haldia</option><option value="Howrah">Howrah</option><option value="Kamarhati">Kamarhati</option><option value="Kharagpur">Kharagpur</option><option value="Kolkata">Kolkata</option><option value="Kulti">Kulti</option><option value="Madhyamgram">Madhyamgram</option><option value="Maheshtala">Maheshtala</option><option value="Malda">Malda</option><option value="Midnapore">Midnapore</option><option value="Naihati">Naihati</option><option value="North Dumdum">North Dumdum</option><option value="Panihati">Panihati</option><option value="Raiganj">Raiganj</option><option value="Rajpur Sonarpur">Rajpur Sonarpur</option><option value="Serampore">Serampore</option><option value="Siliguri">Siliguri</option><option value="South Dumdum">South Dumdum</option><option value="Uluberia">Uluberia</option>');
  
          case 'state_karnataka':
                // code block
              $('#cityName').append('<option value="Bangalore">Bangalore</option><option value="Belgaum">Belgaum</option><option value="Bellary">Bellary</option><option value="Bidar">Bidar</option><option value="Bijapur">Bijapur</option><option value="Davanagere">Davanagere</option><option value="Gulbarga">Gulbarga</option><option value="Hospet">Hospet</option><option value="Hubli Dharwad">Hubli Dharwad</option><option value="Mangalore">Mangalore</option><option value="Mysore">Mysore</option><option value="Raichur">Raichur</option><option value="Shimoga">Shimoga</option><option value="Tumkur">Tumkur</option><option value="Udupi">Udupi</option>');
  
          case 'state_odisha':
                // code block
              $('#cityName').append('<option value="Berhampur">Berhampur</option><option value="Bhubaneswar">Bhubaneswar</option><option value="Cuttack">Cuttack</option><option value="Puri">Puri</option><option value="Rourkela">Rourkela</option><option value="Sambalpur">Sambalpur</option>');
  
              case 'state_delhi':
                // code block
              $('#cityName').append('<option value="Bhalswa Jahangir Pur">Bhalswa Jahangir Pur</option><option value="Delhi">Delhi</option><option value="Karawal Nagar">Karawal Nagar</option><option value="Kirari Suleman Nagar">Kirari Suleman Nagar</option><option value="Nangloi Jat">Nangloi Jat</option><option value="New Delhi">New Delhi</option><option value="Sultan Pur Majra">Sultan Pur Majra</option>');
              case 'state_chhattisgarh':
                // code block
              $('#cityName').append('<option value="Bhilai">Bhilai</option><option value="Bilaspur">Bilaspur</option><option value="Durg">Durg</option><option value="Korba">Korba</option><option value="Raipur">Raipur</option>');
  
              case 'state_madhya_pradesh':
                // code block
              $('#cityName').append('<option value="Bhind">Bhind</option><option value="Bhopal">Bhopal</option><option value="Burhanpur">Burhanpur</option><option value="Dewas">Dewas</option><option value="Guna">Guna</option><option value="Gwalior">Gwalior</option><option value="Indore">Indore</option><option value="Jabalpur">Jabalpur</option><option value="Katni">Katni</option><option value="Khandwa">Khandwa</option><option value="Morena">Morena</option><option value="Ratlam">Ratlam</option><option value="Rewa">Rewa</option><option value="Sagar">Sagar</option><option value="Satna">Satna</option><option value="Shivpuri">Shivpuri</option><option value="Singrauli">Singrauli</option><option value="Ujjain">Ujjain</option>');
  
              case 'state_jharkhand':
                // code block
              $('#cityName').append('<option value="Bokaro">Bokaro</option><option value="Deoghar">Deoghar</option><option value="Dhanbad">Dhanbad</option><option value="Giridih">Giridih</option><option value="Hazaribagh">Hazaribagh</option><option value="Jamshedpur">Jamshedpur</option><option value="Mango">Mango</option><option value="Medininagar">Medininagar</option><option value="Phusro">Phusro</option><option value="Ramgarh">Ramgarh</option><option value="Ranchi">Ranchi</option>');
  
            case 'state_assam':
                // code block
                $('#cityName').append('<option value="Bongaigaon">Bongaigaon</option><option value="Dibrugarh">Dibrugarh</option><option value="Guwahati">Guwahati</option><option value="Jorhat">Jorhat</option><option value="Nagaon">Nagaon</option><option value="Silchar">Silchar</option><option value="Tezpur">Tezpur</option><option value="Tinsukia">Tinsukia</option>');
              break;
            case 'state_uttarakhand':
                // code block
                $('#cityName').append('<option value="Dehradun">Dehradun</option><option value="Haridwar">Haridwar</option>');
              break;
            case 'state_sikkim':
              // code block
              $('#cityName').append('<option value="Gangtok">Gangtok</option>');
              break;
              case 'state_telangana':
                $('#cityName').append('<option value="Hyderabad">Hyderabad</option><option value="Karimnagar">Karimnagar</option><option value="Khammam">Khammam</option><option value="Mahbubnagar">Mahbubnagar</option><option value="Miryalaguda">Miryalaguda</option><option value="Nizamabad">Nizamabad</option><option value="Ramagundam">Ramagundam</option><option value="Secunderabad">Secunderabad</option><option value="Suryapet">Suryapet</option><option value="Warangal">Warangal</option>');
                // code block
              break;
            case 'state_manipur':
              $('#cityName').append('<option value="Imphal" class="cityOpt state_manipur">Imphal</option>');
                // code block
              break;
            case 'state_puducherry':
              $('#cityName').append('<option value="Pondicherry">Pondicherry</option><option value="Uzhavarkarai">Uzhavarkarai</option>');
              // code block
              break;
  
              case 'state_andaman_and_nicobar_islands_ut':
                $('#cityName').append('<option value="Port Blair">Port Blair</option>');
                // code block
                break;
  
  
            case 'state_himachal_pradesh':
              $('#cityName').append('<option value="Shimla">Shimla</option>');
              // code block
              break;
  
              case 'state_goa': 
              $('#cityName').append('<option value="Vasco Da Gama">Vasco Da Gama</option>');
              // code block
              break;
  
              case 'state_chandigarh': 
              $('#cityName').append('<option value="Chandigarh">Chandigarh</option>');
              // code block
              break;
  
              case 'state_meghalaya':
                $('#cityName').append('<option value="Cherrapunjee">Cherrapunjee</option><option value="Tura">Tura</option><option value="Nongpoh">Nongpoh</option><option value="Nongstoin">Nongstoin</option><option value="Mairang">Mairang</option><option value="Mankachar">Mankachar</option><option value="Baghmara">Baghmara</option><option value="Cherrapunjee">Cherrapunjee (Cherrapunji)</option><option value="Jowai">Jowai</option><option value="Lawsohtun">Lawsohtun</option><option value="Madanriting">Madanriting (Madanrting)</option><option value="Mairang">Mairang</option><option value="Mawlai">Mawlai</option><option value="Mawpat">Mawpat</option><option value="Nongkseh">Nongkseh</option><option value="Nongmynsong">Nongmynsong</option><option value="Nongpoh">Nongpoh</option><option value="Nongstoin">Nongstoin</option><option value="Nongthymmai">Nongthymmai</option><option value="Pynthormukhrah">Pynthormukhrah (Pynthorumkhrah)</option><option value="Resubelpara">Resubelpara</option><option value="Shillong">Shillong</option><option value="Shillong Cantonment">Shillong Cantonment</option><option value="Tura">Tura</option><option value="Umlyngka">Umlyngka</option><option value="Umpling">Umpling</option><option value="Umroi">Umroi</option><option value="Williamnagar">Williamnagar</option>');
                // code block
                break;
  
                case 'state_nagaland':
                  $('#cityName').append('<option value="Changtongya">Changtongya</option><option value="Chumukedima">Chumukedima</option><option value="Dimapur">Dimapur</option><option value="Diphupar-A">Diphupar A</option><option value="Jalukie">Jalukie</option><option value="Kiphire">Kiphire</option><option value="Kohima">Kohima</option><option value="Kohima Village">Kohima Village</option><option value="Kuda">Kuda</option><option value="Longleng">Longleng</option><option value="Medziphema">Medziphema</option><option value="Mokokchung">Mokokchung</option><option value="Mon Town">Mon Town</option><option value="Naginimora">Naginimora</option><option value="Peren">Peren</option><option value="Pfutsero">Pfutsero</option><option value="Phek">Phek</option><option value="Puranabazar-A">Puranabazar A</option><option value="Rangapahar">Rangapahar</option><option value="Satakha Hq">Satakha Hq.</option><option value="Tseminyu">Tseminyu</option><option value="Tsudikong">Tsudikong (13th Mile Tuli Paper Mill)</option><option value="Tuensang">Tuensang</option><option value="Tuli">Tuli</option><option value="Wokha">Wokha</option><option value="Zunheboto">Zunheboto</option>');
                  // code block
                  break;
  
                  case 'state_dadra_n_nagar_haveli':
                    $('#cityName').append('<option value="Masat">Masat</option><option value="Naroli">Naroli</option><option value="Rakholi">Rakholi</option><option value="Samarvarni">Samarvarni</option><option value="Silvassa">Silvassa (incl. Amli)</option><option value="Dadra">Zunheboto</option>');
                    // code block
                    break;
                    case 'state_daman_n_diu':
                      $('#cityName').append('<option value="Bhimpore">Bhimpore</option><option value="Dadhel">Dadhel</option><option value="Daman">Daman</option><option value="Diu">Diu</option><option value="Dunetha">Dunetha</option><option value="Kachigam">Kachigam</option><option value="Kadaiya">Kadaiya</option><option value="Marwad">Marwad</option>');
                      // code block
                      break;
  
          default:
            // code block 
        }
  
    });
  
  
  });
  
  function onlyAlphaNSpace(a) {
    return a.replace(/[^a-zA-Z ]/g, '');
  }
  
  function removeSpecialChars(a) {
    return a.replace(/[^0-9\.]/g, "");
  }
      
  
    
  
  //10,29,35,54,55,86,887,88,89,00
  
  /* function startsWith(str, word) {
    //if(str.lastIndexOf(word, 10) === 10 || str.lastIndexOf(word, 0) === 0 ||)
    if(str.lastIndexOf(word, 10) === 10)
      return str.lastIndexOf(word, 10) === 10;
    }
  } */
  
  
  (function() {
    'use strict';
      window.addEventListener('load', function(e) {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
  
          e.preventDefault();
  
          form.addEventListener('submit', function(event) {
  
            if($("#datepicker").val() == ''){
              $(".datevalidate").css('display','block');
              event.preventDefault();
            } else {
              $(".datevalidate").css('display','none');
            }
  
            if($("#00N0T000008clYX").val().length != 6){
              $(".companyPincode").css('display','block');
              event.preventDefault();
            } else {
              $(".companyPincode").css('display','none');
            }
  
            if($("#00N0o00000GjgNp").val().length != 6){
              $(".sitepincode").css('display','block');
              event.preventDefault();
            } else {
              $(".sitepincode").css('display','none');
            }
  
            if($("#00N0o00000GjgNd").val().length != 10){
              $(".mobvalid").css('display','block');
              event.preventDefault();
            } else {
              $(".mobvalid").css('display','none');
            }
  
            if($("#00N0T000009rQe1").val().length < 1){
              $(".mobvalid1").css('display','block');
              event.preventDefault();
            } else {
              $(".mobvalid1").css('display','none');
            }
  
            if($("#00N0T000009rQe6").val().length < 1){
              $(".mobvalid2").css('display','block');
              event.preventDefault();
            } else {
              $(".mobvalid2").css('display','none');
            }
  
            if($("#00N0T000009rQeB").val().length < 1){
              $(".mobvalid3").css('display','block');
              event.preventDefault();
            } else {
              $(".mobvalid3").css('display','none');
            }
  
            if($("#00N0T000009rQeG").val().length < 1){
              $(".mobvalid4").css('display','block');
              event.preventDefault();
            } else {
              $(".mobvalid4").css('display','none');
            }
  
            if($("#lead_source").val() == 'Field Lead' && $('.exeLoc').val() == ''){
                  $(".exeLocErr").css('display','block');
                  event.preventDefault();
            } else {
                  $(".exeLocErr").css('display','none');
            }
  
            if($('#comments').val() == ''){
                $(".comments_empty").css('display','block');
                  event.preventDefault();
            } else {
                $(".comments_empty").css('display','none');
            }
  
            if($('#00N0T000008clZL').val() == '' || $('#00N0T000008clZL').val() == null){
              $(".sqfterr").css('display','block');
                event.preventDefault();
            } else {
                $(".sqfterr").css('display','none');
            }
  
            //event.preventDefault();
  
            //alert($('.exeLoc').val());
  
            if (form.checkValidity() === false || $("#datepicker").val() == '' || $("#00N0T000008clYX").val().length != 6 || $("#00N0o00000GjgNp").val().length != 6 || $("#00N0o00000GjgNd").val().length != 10 || $("#00N0T000009rQe1").val().length < 1 || $("#00N0T000009rQe6").val().length < 1 || $("#00N0T000009rQeB").val().length < 1 || $("#00N0T000009rQeG").val().length < 1 || ($("#lead_source").val() == 'Field Lead' && $('.exeLoc').val() == '') || $('#comments').val() == '' || $('#00N0T000008clZL').val() == '' || $('#00N0T000008clZL').val() == null) {
  
              event.preventDefault();
             
              event.stopPropagation();
              console.log("in if");
              //alert(11);
  
            } else {
  
              //alert(22);
              console.log("in else");
  
                var formdata = $("#billfrm").serialize();
  
                      $.ajax({  
                          type: "POST",  
                          url: "save.php",  
                          data: formdata, 
                          async: false,
                          success: function(result){  
                          //alert(result);
                            if(result == 1){ 
                                $('#thankyoupopup').modal('show');
                                return false;
                            } else {
                                alert('Something went wrong!');
                            }
                          } 
                      });
  
                      //event.preventDefault();
            }
  
              form.classList.add('was-validated');
  
          }, false);
        });
      }, false);
    })();
  
  
  // allow number function
  function AllowOnlyNumbers(e) {
      e = e ? e : window.event;
      var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
      var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
      var str =
        e.type && e.type == "paste"
          ? clipboardData.getData("Text")
          : String.fromCharCode(key);
      return /^\d+$/.test(str);
  }
  
  function validatePaste(el, e) {
    var regex = /^[a-z .'-]+$/gi;
    var key = e.clipboardData.getData('text')
    if (!regex.test(key)) {
      e.preventDefault();
      return false;
    }
  }
  
  function getCities1() {
    alert(11);
      $('#cityName').val(''); 
      $('#cityName .cityOpt').css('display', 'none'); 
      var state_class = $('select[name="state"] :selected').attr('class');
      $('#cityName .'+state_class).css('display', 'block'); 
      //alert(state_class);
  
  }