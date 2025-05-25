export function editProfile() {
  console.log("Hello from Edit Profile");
  document.addEventListener("DOMContentLoaded", function () {

    // Show edit modal
    document.getElementById('edit').addEventListener('click', () => {
      document.getElementById('editModal').showModal();

      const profileName = document.getElementById('profileName');
      const profileJob = document.getElementById('profileJob');
      if (profileName && profileJob) {
        document.getElementById('editName').value = profileName.textContent;
        document.getElementById('editBio').value = profileJob.textContent;
      }
    });

    // Show preview modal
    document.getElementById('showModal').addEventListener('click', () => {
      document.getElementById('previewModal').showModal();

      const profileName = document.getElementById('profileName');
      const profileJob = document.getElementById('profileJob');
      const profileImage = document.getElementById('profileImage');

      const previewTitle = document.getElementById('previewTitle');
      const previewJob = document.getElementById('previewJob');
      const previewImage = document.getElementById('previewImage');

      if (profileName && profileJob) {
        previewTitle.textContent = profileName.textContent;
        previewJob.textContent = profileJob.textContent;
      }

      if (profileImage && previewImage) {
        previewImage.src = profileImage.src;
        previewImage.style.display = 'block';
      }
    });

    // Close  edit modal
    document.getElementById('closeEditModal').addEventListener('click', () => {
      document.getElementById('editModal').close();
    });

    // Close preview modal
    document.getElementById('closePreviewModal').addEventListener('click', () => {
      document.getElementById('previewModal').close();
    });

  



    // Edit  modal image preview
    document.getElementById('editImage').addEventListener('change', function () {
      const file = this.files[0];
      const imagePreview = document.getElementById('imagePreview');
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          imagePreview.src = e.target.result;
          imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        imagePreview.src = '';
        imagePreview.style.display = 'none';
      }
    });

    // Handle form submit
    document.getElementById('editProfileForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const newName = document.getElementById('editName').value;
      const newJob = document.getElementById('editBio').value;
      const newImageFile = document.getElementById('editImage').files[0];

      document.getElementById('profileName').textContent = newName;
      document.getElementById('profileJob').textContent = newJob;

      if (newImageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(newImageFile);
      }

   

    });
  });


}