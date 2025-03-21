<?php

namespace Drupal\wayfinder_api\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\NodeType;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Controller class for Wayfinder API.
 */
class WayfinderApiController extends ControllerBase {

  /**
   * Returns the number of nodes for each content type.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   JSON response with the node count for each content type.
   */
  public function getNodeCounts() {
    // Load all node types.
    $node_types = NodeType::loadMultiple();

    // Initialize an array to store node counts for each content type.
    $node_counts = [];

    // Loop through each node type and count the nodes.
    foreach ($node_types as $type) {
      // Count the nodes for the current node type.
      $count = \Drupal::entityQuery('node')
        ->condition('type', $type->id())
        ->count()
        ->execute();

      // Store the node count for the current content type.
      $node_counts[$type->label()] = $count;
    }

    // Return the node counts as a JSON response.
    return new JsonResponse($node_counts);
  }
}
