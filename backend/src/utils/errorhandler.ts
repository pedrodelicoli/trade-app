const errorHandler = (status: number, message: string) => ({
    erro: {
      status,
      message,
    },  
  }  
);

export { errorHandler };