import { Router, Request, Response } from 'express'
import * as PaginaController from '../controllers/paginaController'


const router = Router()

router.get('/', PaginaController.home)
router.get('/breve', PaginaController.breve)
router.get('/contato', PaginaController.contato)
router.get('/sobre', PaginaController.sobre)





export default router