from __future__ import print_function
import grpc
import quadratic_pb2
import quadratic_pb2_grpc


def run():
    print("Let's solve a quadratic equation! Give me some integers...")
    a = int(input("a = "))
    b = int(input("b = "))
    c = int(input("c = "))
    with grpc.insecure_channel("localhost:50051") as channel:
        stub = quadratic_pb2_grpc.QuadraticServiceStub(channel)
        response = stub.SolveQuadratic(quadratic_pb2.QuadraticRequest(a=a, b=b, c=c))

    print(response.message)

if __name__ == "__main__":
    run()