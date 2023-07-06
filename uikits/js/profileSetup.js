const profileImgInput = document.getElementById("profileImgSrc");
const profileForm = document.getElementById("profileForm");
const _name = document.getElementById("name");
const _birthday = document.getElementById("birthday");
const _address = document.getElementById("address");
const _phoneNum = document.getElementById("phoneNum");
const _description = document.getElementById("description");
// const alertMsg = document.getElementsByClassName('alert--success')[0];
const formTemplateSectionDiv = document.getElementsByClassName(
  "formTemplate--section"
)[0];
const previewDiv = document.getElementsByClassName("profileImg--overview")[0];
const removeIcon = document.getElementsByClassName("fa-xmark")[0];
const previewImgTag = document.querySelector(".profileSetup__Img img");
const previewIconTag = document.getElementsByClassName(
  "profilePreview__Img"
)[0];

const profileData = {
  imageSrc: "",
  name: "",
  gender: "",
  birthday: "",
  address: "",
  phoneNum: "",
  description: "",
};

let fileVal;
profileImgInput.addEventListener("change", () => {
    if( profileImgInput.files.length > 0 ){
        fileVal = profileImgInput.value;
        console.log(fileVal)
        formTemplateSectionDiv.classList.add("changeBlur");
        let file = profileImgInput.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {

            let imgURL = reader.result;

            profileData.imageSrc = imgURL;

            previewImgTag.src = imgURL;

            previewIconTag.src = imgURL;
            previewIconTag.classList.remove("profilePreview__Img__before");
            
            profileImgInput.classList.add('changeContent');

            previewDiv.classList.remove("before--fileInput");
            removeIcon.addEventListener("click", () => {
                previewDiv.classList.add("before--fileInput");
                formTemplateSectionDiv.classList.remove("changeBlur");
            });

            previewIconTag.addEventListener("click", () => {
                previewDiv.classList.remove("before--fileInput");
                formTemplateSectionDiv.classList.add("changeBlur");
            });
        };
    }else{
        profileImgInput.value = '';      
    }


    
  
});

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameValue = _name.value.trim();
  profileData.name = nameValue;

  const _gender = document.querySelector('input[type="radio"]:checked');
  profileData.gender = _gender.value;

  profileData.birthday = _birthday.value;

  profileData.address = _address.value.trim();

  profileData.phoneNum = _phoneNum.value;

  profileData.description = _description.value;

  // alertMsg.classList.add('show--msg');
  setTimeout(() => {
    sessionStorage.setItem("profileData", JSON.stringify(profileData));
    profileForm.submit();
    location.replace("profile.html");
  }, 2000);
});

// _name.addEventListener('change',()=>{
//     let nameValue = _name.value.trim();
//     profileData.name = nameValue;

// })
