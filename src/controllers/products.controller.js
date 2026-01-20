import * as Model from '../models/Product.js';

export const getAllProducts = async (req, res) => {
    const { category } = req.query;
    const products = await Model.getAllProducts();

    if (category) {
        const productsFiltered = products.filter((item) =>
            item.categories.includes(category),
        );
        res.json(productsFiltered);
        return;
    }

    res.json(products);
};

export const searchProducts = (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res
            .status(400)
            .json({ error: 'El parámetro name es obligatorio' });
    }

    const products = Model.getAllProducts();

    const productsFiltered = products.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase()),
    );

    if (productsFiltered.length === 0) {
        return res.status(404).json({ error: 'No se encontraron productos' });
    }
    res.json({ productsFiltered });
};

export const getProductById = async (req, res) => {
    const id = parseInt(req.params.id); // convertir a numerico

    const product = await Model.getProductById(id);
    if (!product) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(product); // devuelve los parametros de la ruta siempre como string
};
