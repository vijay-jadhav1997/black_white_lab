# BlackWhiteLab

- **Go Live 👉🏻**  [BlackWhiteLab Live Preview](https://black-white-lab.vercel.app/)

## Black & White Image Converter

A web application that allows users to upload colorful images, converts them to black-and-white (grayscale), and displays the converted image back to the user. The application consists of a React.js front-end and a Django-based back-end.

## Features

- Upload colorful images from your local device.
- Convert uploaded images to black-and-white (grayscale).
- View both the original and converted images.
- Store original and converted images on the server.
- User-friendly interface with seamless interaction.

---

## Tech Stack

### **Frontend**
- **JavaScript**
- **React.js**: Frontend framework for building user interfaces.
- **React Router DOM**: For handling client-side routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **vite**: Build tools.

### **Backend**
- **Python**
- **Django**: Web framework for building server-side functionality.
- **Django REST Framework (DRF)**: For building RESTful API endpoints.
- **simple_jwt**: For JWT authentication and securing RESTful API endpoints.
- **Pillow**: Python Imaging Library for image processing.
- **python-decouple**: To manage environment variables securely.

---

## Prerequisites

### Backend
- Python 3.10+
- Pip (Python package manager)

### Frontend
- Node.js (Latest version)
- npm (Latest version)

---

## Installation and Setup

### Backend
1. Clone the repository and navigate to the `backend` folder:
   ```bash
   git clone https://github.com/vijay-jadhav1997/black_white_lab.git
   cd black_white_lab/backend
   ```
2. Create and activate a virtual environment:
    ```bash 
    python -m venv my_env
    source my_env/Script/activate    # Windows
    source env/bin/activate  # Linux/Mac
    ```
3. Install required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Configure environment variables using .env:
    ```bash
    SECRET_KEY=your-secret-key
    DEBUG=True
    CORS_ALLOWED_ORIGINS=add_origins
    ...
    ...
    ```
5. Apply database migrations:
    ```bash
    python manage.py migrate
    ```
6. Start the development server:
    ```bash
    python manage.py runserver
    ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
    ```bash 
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open the React application in your browser at:
  > http://localhost:5173

2. Upload an image using the file picker.

3. View the original and converted (black-and-white) images.
4. You can also create your own account with us.


## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## Contact
If you have any questions or feedback, feel free to contact:

  -  Email: vijay05111997@gmail.com
  -  LinkedIn: [vijay-jadhav1997](https://www.linkedin.com/in/vijay-jadhav1997)