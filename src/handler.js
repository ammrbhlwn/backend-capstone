const { nanoid } = require('nanoid');
const supabase = require('../config/supabaseClient');

const getData = supabase.from('dataProduct').select('*');
console.log(getData);

const addProductHandler = async (request, h) => {
  const { name, category, storeId, price, image } = request.payload;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan produk. Mohon isi nama produk',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(10);
  const createdAt = new Date().toISOString();

  const { data, error } = await supabase
    .from('dataProduct')
    .insert([{ id, name, category, storeId, price, image, createdAt }]);
  const newProduct = {};

  products.push(newProduct);

  const isSuccess = products.filter((product) => product.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Produk berhasil ditambahkan',
      data: {
        productId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan produk',
  });
  response.code(500);
  return response;
};

const getAllProductsHandler = async (request, h) => {
  const { data, error } = await supabase.from('dataProduct').select('*');

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menampilkan produk',
    });
    response.code(500);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      products: data,
    },
  });

  response.code(200);
  return response;
};

const getProductByIdHandler = async (request, h) => {
  const { id } = request.params;

  const { data, error } = await supabase
    .from('dataProduct')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Produk tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: { product: data },
  });
  response.code(200);
  return response;
};

const editProductByIdHandler = async (request, h) => {
  const { id } = request.params;
  const { name, category, storeId, price, image } = request.payload;
  const createdAt = new Date().toISOString();

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui produk. Mohon isi nama produk',
    });
    response.code(400);
    return response;
  }

  const { data, error } = await supabase
    .from(' products')
    .update({ name, category, storeId, price, image, createdAt })
    .eq('id', id);

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui produk. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'Produk berhasil diperbarui',
  });
  response.code(200);
  return response;
};

const deleteProductByIdHandler = async (request, h) => {
  const { id } = request.params;

  const { error } = await supabase.from('dataProduct').delete().eq('id', id);

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Produk gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'Produk berhasil dihapus',
  });
  response.code(200);
  return response;
};

const addStoreHandler = async (request, h) => {
  const { name, category, storeId, price, image } = request.payload;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan produk. Mohon isi nama produk',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(10);
  const createdAt = new Date().toISOString();

  const { data, error } = await supabase
    .from('dataProduct')
    .insert([{ id, name, category, storeId, price, image, createdAt }]);
  const newProduct = {};

  products.push(newProduct);

  const isSuccess = products.filter((product) => product.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Produk berhasil ditambahkan',
      data: {
        productId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan produk',
  });
  response.code(500);
  return response;
};

const getAllStoresHandler = async (request, h) => {
  const { data, error } = await supabase.from('dataProduct').select('*');

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menampilkan produk',
    });
    response.code(500);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      products: data,
    },
  });

  response.code(200);
  return response;
};

const getStoreByIdHandler = async (request, h) => {
  const { id } = request.params;

  const { data, error } = await supabase
    .from('dataProduct')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Produk tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: { product: data },
  });
  response.code(200);
  return response;
};

const editStoreByIdHandler = async (request, h) => {
  const { id } = request.params;
  const { name, category, storeId, price, image } = request.payload;
  const createdAt = new Date().toISOString();

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui produk. Mohon isi nama produk',
    });
    response.code(400);
    return response;
  }

  const { data, error } = await supabase
    .from(' products')
    .update({ name, category, storeId, price, image, createdAt })
    .eq('id', id);

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui produk. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'Produk berhasil diperbarui',
  });
  response.code(200);
  return response;
};

const deleteStoreByIdHandler = async (request, h) => {
  const { id } = request.params;

  const { error } = await supabase.from('dataProduct').delete().eq('id', id);

  if (error) {
    const response = h.response({
      status: 'fail',
      message: 'Produk gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'Produk berhasil dihapus',
  });
  response.code(200);
  return response;
};

module.exports = {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
  addStoreHandler,
  getAllStoresHandler,
  getStoreByIdHandler,
  editStoreByIdHandler,
  deleteStoreByIdHandler,
};
