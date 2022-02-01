import {Response, Request, NextFunction} from 'express'

const error = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.erro) {
      const { erro } = err;
      return res.status(erro.status).json({
        message: erro.message,      
      });    
    }  
    res.status(500).json({ message: 'Internal Server Error' });
  };
  
  export { error }; 