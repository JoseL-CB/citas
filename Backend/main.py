from fastapi import FastAPI
from Apis.Api_Perfil_Usuario import router as usuariosRouter  
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/")
def read_root():
    return RedirectResponse(url="/docs")

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)


app.include_router(usuariosRouter, prefix="/api")
