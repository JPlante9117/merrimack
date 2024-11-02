from concurrent import futures
import grpc
import quadratic_pb2
import quadratic_pb2_grpc
import math, cmath

class QuadraticSolver(quadratic_pb2_grpc.QuadraticServiceServicer):
    def doQuadraticComputation(self, a, b, c, isPos):
        plusMinus = 1 if isPos else -1
        discriminant = b**2 - (4*a*c)
        if discriminant >= 0: # math.sqrt can handle positive
            return ((-1 * b) + (plusMinus * math.sqrt(discriminant)))/(2*a)
        else: # cmath.sqrt can handle negative
            return ((-1 * b) + (plusMinus * cmath.sqrt(discriminant)))/(2*a)
        
    def SolveQuadratic(self, request, context):
        a = request.a
        b = request.b
        c = request.c

        if (a != 0):
            solution1 = self.doQuadraticComputation(a=a, b=b, c=c, isPos=True)
            solution2 = self.doQuadraticComputation(a=a, b=b, c=c, isPos=False)

            return quadratic_pb2.QuadraticResponse(message=f"Solutions: {solution1} and {solution2}")
        else:
            return quadratic_pb2.QuadraticResponse(message="No Answer - Divide By 0")

def serve():
    port = "50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    server.add_insecure_port("[::]:" + port)
    quadratic_pb2_grpc.add_QuadraticServiceServicer_to_server(QuadraticSolver(), server)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()

if __name__ == "__main__":
    serve()