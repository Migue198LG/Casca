function validingreso(){
    const correo_i = req.body.correo_r;
    const contra_i = req.body.contra_r;
    const contra_i2 = req.body.contra_r2;
    const Usuario_i = req.body.Usuario_r;

    // Validaciones manuales
    if (!Usuario_i) {
        alert({ error: 'Ingresa los datos correctamente.' });
    }

    if (!correo_i || !correo_i.endsWith('@gmail.com')) {
        alert({ error: 'El correo electrónico debe ser de formato Gmail.' });
    }

    if (contra_i.length < 8) {
        alert({ error: 'La contraseña debe tener al menos 8 caracteres.' });
    }

    if (contra_i !== contra_i2) {
        alert({ error: 'Las contraseñas no coinciden.' });
    }
}