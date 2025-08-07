const sendResponse = (res, jsonData) => {
    res.status(jsonData.statusCode).json({
      success: jsonData.success,
      statusCode: jsonData.statusCode,
      message: jsonData.message,
      token: jsonData.token || null,
      meta: jsonData.meta || null,
      data: jsonData.data || null,
    });
  };
  
  export default sendResponse;