class NotFoundError(Exception):
    pass

class UnauthorizedError(Exception):
    pass

class ForbiddenError(Exception):
    pass

class BadRequestError(Exception):
    pass


class DatabaseError(Exception):
    pass


class ConflictError(Exception):
    pass